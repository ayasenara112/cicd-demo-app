pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins-cicd-demo-app"
        CONTAINER_NAME = "jenkins-cicd-demo-container"
        APP_PORT = "3000"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Deploy as Container') {
            steps {
                echo 'Deploying application as Docker container...'

                bat '''
                docker stop %CONTAINER_NAME% || exit 0
                docker rm %CONTAINER_NAME% || exit 0
                docker run -d -p %APP_PORT%:3000 --name %CONTAINER_NAME% %IMAGE_NAME%
                docker ps
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}