#!groovy 

node {
   stage 'Checkout'
        checkout scm

   stage 'Setup'
        sh '/home/ec2-user/.nvm/versions/node/v6.11.5/bin/npm install'

   stage 'Mocha test'
        sh './node_modules/mocha/bin/mocha'

   stage 'Cleanup'
        echo 'prune and cleanup'
        sh 'npm prune'
        sh 'rm node_modules -rf'
}
