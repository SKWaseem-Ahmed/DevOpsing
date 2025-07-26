pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "devopstube"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/SKWaseem-Ahmed/DevOpsing.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Start App with Docker Compose') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Test App') {
            steps {
                sh 'sleep 10'
                sh 'curl -f http://localhost:5151 || exit 1'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up containers...'
            sh 'docker-compose down'
        }
    }
}
