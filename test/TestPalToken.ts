import {expect} from "chai";
import {ethers} from "hardhat";

describe("TestPalToken", function () {
    it("Contract", async function () {
        const [owner] = await ethers.getSigners();
        const ownerAddr = await owner.getAddress();

        const palTokenContractFactory = await ethers.getContractFactory(
            "PalToken"
        );
        const palToken = await palTokenContractFactory.deploy();
        await palToken.deployed();

        expect(await palToken.name()).to.equal("Palmare");

        expect(await palToken.symbol()).to.equal("PAL");

        await palToken.mint(
            ownerAddr,
            ethers.utils.parseEther("10000000000")
        );

        expect(await palToken.totalSupply()).to.equal(
            ethers.utils.parseEther("10000000000")
        );
    });
});
