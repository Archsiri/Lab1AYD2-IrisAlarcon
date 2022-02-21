pipeline {
  agent any
  stages {

    stage('Git') {
      steps {
        checkout changelog: true, poll: true, scm: [$class: 'GitSCM', branches: [[name: '*/main']], browser: [$class: 'GithubWeb', repoUrl: 'https://github.com/Archsiri/Lab1AYD2-IrisAlarcon'], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'Github', url: 'https://github.com/Archsiri/Lab1AYD2-IrisAlarcon.git']]]
      }
    }
     stage('Install dependencies') {
            steps {
                script {
                    nodejs(nodeJSInstallationName:'NodeJs-Lab1-AYD2'){
                        sh 'npm install'
                    }
                }
            }
        }


    stage('Build project'){
        steps{
            nodejs(nodeJSInstallationName:'NodeJs-Lab1-AYD2'){
                  sh 'npm run build'
              }
        }
    }

     stage('Docker Build') {
            steps {
                script {
                    sh 'docker build -f Dockerfile -t lab1ayd2 .'
                }
            }
        }

    stage('Docker Stop') {
            steps {
                script{
                    sh 'docker ps -f name=lab1ayd2 -q | xargs --no-run-if-empty docker container stop'
                    sh 'docker container ls -a -fname=lab1ayd2 -q | xargs -r docker container rm'
                }
            }
       }

    stage('Docker Run') {
            steps {
                script{
                    sh 'docker run -d --name lab1ayd2 --rm -p 8000:80 lab1ayd2'
                }
            }
       }

  }
}
