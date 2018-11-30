const fs = require('fs');
const rimraf = require('rimraf');

const tempFilePath = '/Users/craigmiller/Documents/temp.txt';
const jsDirPath = '/Users/craigmiller/Documents/JSTemp';

const checkFileStats = () => {
	fs.open(tempFilePath, 'r', (err, fd) => {
		if (err) throw err;
		fs.fstat(fd, (err, stat) => {
			if (err) throw err;
			console.log(stat);
		});

		fs.close(fd, (err) => {
			if (err) throw err;
		});
	});
};

const readFile = () => {
	fs.readFile(tempFilePath, 'utf8', (err, contents) => {
		if (err) throw err;
		console.log(contents);
	});
};

const listDirectory = () => {
	fs.readdir(jsDirPath, {withFileTypes: true}, (err, files) => {
		if (err) throw err;
		files.forEach(file => {
			const type = file.isDirectory() ? 'Directory' : 'File';
			console.log(`${file.name} (${type})`);
		});
	});
};

const createDirectory = () => {
	fs.mkdir(`${jsDirPath}/abc/def`, {recursive: true}, (err) => {
		if (err) throw err;
	});
};

const deleteDirectory = () => {
	const path = `${jsDirPath}/abc`;
	fs.exists(path, exists => {
		if (!exists) {
			console.log(`Directory does not exist: ${path}`);
			return;
		}

		fs.lstat(path, (err, stats) => {
			if (err) throw err;
			if (!stats.isDirectory()) {
				console.log(`Path is not a directory: ${path}`);
				return;
			}

			fs.rmdir(path, (err) => {
				if (err) throw err;
			});
		});
	});
};

const deleteDirectoryRecursive = () => {
	const path = `${jsDirPath}/abc`;
	rimraf(path, () => {
		//Nothing to do in this callback
	});
};

process.argv
	.slice(2)
	.forEach(val => {
		if ('checkFileStats' === val) {
			checkFileStats();
		}
		else if ('readFile' === val) {
			readFile();
		}
		else if ('listDirectory' === val) {
			listDirectory();
		}
		else if ('createDirectory' === val) {
			createDirectory();
		}
		else if ('deleteDirectory' === val) {
			deleteDirectory();
		}
		else if ('deleteDirectoryRecursive') {
			deleteDirectoryRecursive();
		}
		else {
			throw new Error(`Invalid argument: ${val}`);
		}
	});



