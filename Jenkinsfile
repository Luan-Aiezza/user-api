pipeline {
    agent any
    tools {
        gradle 'gradle 8'
        jdk 'jdk9'
    }
    stages {
        stage('Build') {
            steps{
                sh 'gradle clean build'
            }
            post {
                success {
                    echo 'perfect'
                }
            }
        }
    }
}
