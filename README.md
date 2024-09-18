# DAFP - Decentralized Autonomous Fundraising Platform

<img width="2056" alt="Screenshot 2024-09-15 at 4 29 48 AM" src="https://github.com/user-attachments/assets/9b1df2c6-5f45-4c49-9cfe-4f44c93503c1">

# Devpost/Demo
[Devpost with demo](https://devpost.com/software/dafp?ref_content=user-portfolio&ref_feature=in_progress)

# Inspiration

Traditional startup fundraising is often restricted by stringent regulations, which make it difficult for small investors and emerging founders to participate. These barriers favor established VC firms and high-networth individuals, limiting innovation and excluding a broad range of potential investors. Our goal is to break down these barriers by creating a decentralized, community-driven fundraising platform that democratizes startup investments through a Decentralized Autonomous Organization, also known as DAO.

# What It Does

To achieve this, our platform leverages blockchain technology and the DAO structure. Here’s how it works:

- **Tokenization**: We use blockchain technology to allow startups to issue digital tokens that represent company equity or utility, creating an investment proposal through the DAO.
- **Lender Participation**: Lenders join the DAO, where they use cryptocurrency, such as USDC, to review and invest in the startup proposals. -**Startup Proposals**: Startup founders create proposals to request funding from the DAO. These proposals outline key details about the startup, its goals, and its token structure. Once submitted, DAO members review the proposal and decide whether to fund the startup based on its merits.
- **Governance-based Voting**: DAO members vote on which startups receive funding, ensuring that all investment decisions are made democratically and transparently. The voting is weighted based on the amount lent in a particular DAO.

# How We Built It

### Backend:

- **Solidity** for writing secure smart contracts to manage token issuance, investments, and voting in the DAO.
- **The Ethereum Blockchain** for decentralized investment and governance, where every transaction and vote is publicly recorded.
- **Hardhat** as our development environment for compiling, deploying, and testing the smart contracts efficiently.
- **Node.js** to handle API integrations and the interface between the blockchain and our frontend.

### Frontend:

- **MetaMask** Integration to enable users to seamlessly connect their wallets and interact with the blockchain for transactions and voting.
- **React** and **Next.js** for building an intuitive, responsive user interface.
- **TypeScript** for type safety and better maintainability.
- **TailwindCSS** for rapid, visually appealing design.
- **Shadcn UI** for accessible and consistent component design.

![Modern Business Process Flowchart (1)](https://github.com/user-attachments/assets/762b7f1c-25e1-4e44-925a-0b11d951e116)


# Challenges We Faced, Solutions, and Learning

### Challenge 1 - Creating a Unique Concept:

Our biggest challenge was coming up with an original, impactful idea. We explored various concepts, but many were already being implemented.

**Solution**:  
After brainstorming, the idea of a DAO-driven decentralized fundraising platform emerged as the best way to democratize access to startup capital, offering a novel and innovative solution that stood out.

### Challenge 2 - DAO Governance:

Building a secure, fair, and transparent voting system within the DAO was complex, requiring deep integration with smart contracts, and we needed to ensure that all members, regardless of technical expertise, could participate easily.

**Solution**:  
We developed a simple and intuitive voting interface, while implementing robust smart contracts to automate and secure the entire process. This ensured that users could engage in the decision-making process without needing to understand the underlying blockchain mechanics.

## Accomplishments that we're proud of

- **Developing a Fully Functional DAO-Driven Platform**: We successfully built a decentralized platform that allows startups to tokenize their assets and engage with a global community of investors.
- **Integration of Robust Smart Contracts for Secure Transactions**: We implemented robust smart contracts that govern token issuance, investments, and governance-based voting bhy writing extensice unit and e2e tests.

- **User-Friendly Interface**: Despite the complexities of blockchain and DAOs, we are proud of creating an intuitive and accessible user experience. This lowers the barrier for non-technical users to participate in the platform, making decentralized fundraising more inclusive.

## What we learned

- **The Importance of User Education**: As blockchain and DAOs can be intimidating for everyday users, we learned the value of simplifying the user experience and providing educational resources to help users understand the platform's functions and benefits.

- **Balancing Security with Usability**: Developing a secure voting and investment system with smart contracts was challenging, but we learned how to balance high-level security with a smooth user experience. Security doesn't have to come at the cost of usability, and this balance was key to making our platform accessible.

- **Iterative Problem Solving**: Throughout the project, we faced numerous technical challenges, particularly around integrating blockchain technology. We learned the importance of iterating on solutions and adapting quickly to overcome obstacles.

# What’s Next for DAFP

Looking ahead, we plan to:

- **Attract DAO Members**: Our immediate focus is to onboard more lenders to the DAO, building a large and diverse community that can fund a variety of startups.
- **Expand Stablecoin Options**: While USDC is our starting point, we plan to incorporate more blockchain networks to offer a wider range of stablecoin options for lenders (EURC, Tether, or Curve).
- **Compliance and Legal Framework**: Even though DAOs are decentralized, we recognize the importance of working within the law. We are actively exploring ways to ensure compliance with global regulations on securities, while maintaining the ethos of decentralized governance.

# Release

We have deployed the v1.0 on the Ethereum Sepolia Testnet. The following contracts can be accessed to be interacted:

- **DAOFactory**: 0x200D4f7AA401C681CC5cc3BBCAB249bccf620c3e
- **StartupTokenFactory**: 0x91768fCc1C20Ad1e597070012a8CcdBA90a71eF5
- **DAO1**: 0xEDfEDD868D828B12CA177D64d349c5B2d4A98566
