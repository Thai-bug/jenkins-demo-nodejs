pipeline{
  agent any
  stages{
    stage('Clone'){
      steps{
        git 'https://github.com/Thai-bug/jenkins-demo-nodejs.git'
      }
    }

    stage('Pull'){
      steps{
        withDockerRegistry(credentialsId: 'moleculer-demo', url: 'https://index.docker.io/v1/') {
          sh label: '', script: 'docker build -t xuanthai1202/moleculer:v1 .'
          sh label: '', script: 'docker push xuanthai1202/moleculer:v1'
      }
      }
    }
  }
}