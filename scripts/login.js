
const loginMethods = {
	
		passwordGeneration(){
			const setSymbols =`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%&_|?`;
			let password = "";
			for(let i = 0; i < 10; i++){
				const ranomIndex = Math.floor(Math.random() * setSymbols.length);
				password += setSymbols[ranomIndex];
			}
			return password;
		},
}

export default loginMethods;