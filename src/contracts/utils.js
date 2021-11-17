import { ethers } from 'ethers';

const ABI = require('./todos.json').abi;

export const getTodos = async () => {
    try {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
            "0xC3c4E44D0d786E2c627B71067f7Fb587cbD8fa4b",       //ropsten address
            ABI,
            signer
        )

        // https://stackoverflow.com/questions/67239017/how-to-get-ethers-js-response-data
                // no actual tx's made here...just a 'read' function call.
        const functionCall = contract.getTodos();
        console.log(functionCall);

        return functionCall;
    } catch (err) {
        console.log(err);
    }
}

export const addTodo = async (desc) => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
            "0xC3c4E44D0d786E2c627B71067f7Fb587cbD8fa4b",       //ropsten address
            ABI,
            signer
        )

            // https://stackoverflow.com/questions/67239017/how-to-get-ethers-js-response-data
                // here, I DO make a tx...I'm updating the blockchain state
        const tx = await contract.addTodo(desc);
        const receipt = await tx.wait()
        console.log(receipt);
        return receipt;
    } catch (err) {
        console.log(err);
    }
}