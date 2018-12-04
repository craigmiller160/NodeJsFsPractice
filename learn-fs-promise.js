const fs = require('fs-extra');

const tempFilePath = '/Users/craigmiller/Documents/temp.txt';
const jsDirPath = '/Users/craigmiller/Documents/JSTemp';

const checkFileStats = () => {
	// fs.open(tempFilePath, 'r', (err, fd) => {
	// 	if (err) throw err;
	// 	fs.fstat(fd, (err, stat) => {
	// 		if (err) throw err;
	// 		console.log(stat);
	// 	});

	// 	fs.close(fd, (err) => {
	// 		if (err) throw err;
	// 	});
	// });

	fs.open(tempFilePath, 'r')
		.then(stat => console.log('Success'))
		.catch(err => console.log('Fail'));
};

process.argv
	.slice(2)
	.forEach(val => {
		if ('checkFileStats' === val) {
			checkFileStats();
		}
		else if ('readFile' === val) {
			// readFile();
		}
		else if ('listDirectory' === val) {
			// listDirectory();
		}
		else if ('createDirectory' === val) {
			// createDirectory();
		}
		else if ('deleteDirectory' === val) {
			// deleteDirectory();
		}
		else if ('deleteDirectoryRecursive') {
			// deleteDirectoryRecursive();
		}
		else {
			throw new Error(`Invalid argument: ${val}`);
		}
	});