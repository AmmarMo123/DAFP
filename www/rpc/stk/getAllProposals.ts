import { ethers } from "ethers";
import chainConfig from "../index.json";

export default async function getAllProposals(
	startupTokenAddress: string,
	provider: any
) {
	try {
		const startupTokenAbi = chainConfig.contracts.startuptoken.abi;

		const dao = new ethers.Contract(
			startupTokenAddress,
			startupTokenAbi,
			provider
		);
		const proposalsAddresses = await dao.getAllProposals();

		// for each address we need to get the proposal
		const proposals: any[] = [];
		for (let i = 0; i < proposalsAddresses.length; i++) {
			const proposal = new ethers.Contract(
				proposalsAddresses[i],
				chainConfig.contracts.proposal.abi,
				provider
			);
			const details = await proposal.getDetails();
			proposals.push({
				address: proposalsAddresses[i],
				startupToken: details[0],
				dao: details[1],
				founder: details[2],
				description: details[3],
				requestedAmount: details[4],
				tokensOffered: details[5],
				fundingAddress: details[6],
				votesFor: details[7],
				votesAgainst: details[8],
				finalized: details[9],
				voted: details[10],
				voteSelection: details[11],
				canFinalize: details[12],
				votingPower: details[13],
			});
		}

		console.log("[STK]", "Proposals", proposals);

		return proposals;
	} catch (error) {
		console.error("Error getting all proposals:", error);
		throw new Error(`Failed to get all proposals: ${error.message}`);
	}
}
