// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const { exec } = require('child_process');
const chalk = require('react-dev-utils/chalk');

// Ensure environment variables are read.
require('../config/env');

const s3Bucket = process.env.AWS_S3_BUCKET;

exec('yarn build', (err, out) => {
  if (err) {
    console.log(chalk.red(out));
    process.exit(1);
  }

  console.log(out);
  console.log(chalk.green('Built'));
  exec(`aws s3 sync build/ s3://${s3Bucket} --acl public-read`, (err, out) => {
    if (err) {
      console.log(chalk.red(err));
      process.exit(1);
    }
    console.log(out, err);
    console.log(chalk.green(`Pushed to bucket: ${s3Bucket}`));
  });
});
