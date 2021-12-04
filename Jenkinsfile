pipeline{
  agent any
  stages{
    stage('Clone'){
      steps{
        git 'https://github.com/Thai-bug/jenkins-demo-nodejs.git'
      }
    }

    stage('Build'){
      steps{
        sh 'docker-compose up -d --build'
      }
    }
  }
}