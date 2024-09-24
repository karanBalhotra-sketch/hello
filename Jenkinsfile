pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/karanBalhotra-sketch/hello.git'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build the React application
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run automated tests
                sh 'npm run test -- --coverage'
            }
        }
    }

    post {
        always {
            // Archive build artifacts and test results
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            junit 'test-results/*.xml'
        }

        success {
            // Notify on success
            mail to: 'youremail@example.com',
                 subject: "SUCCESS: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: "The build ${env.JOB_NAME} [${env.BUILD_NUMBER}] succeeded. Check Jenkins for details."
        }

        failure {
            // Notify on failure
            mail to: 'youremail@example.com',
                 subject: "FAILURE: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: "The build ${env.JOB_NAME} [${env.BUILD_NUMBER}] failed. Check Jenkins for details."
        }
    }
}
