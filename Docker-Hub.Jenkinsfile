pipeline {
    stages {
        stage("Pull") {
            steps {
                sh '''
                    docker image pull boda175/nodejs
                '''
            }
        }
        stage("Create container") {
            steps {
                sh '''
                    docker container stop nodejs
                    docker container rm nodejs
                    docker container run --name nodejs -p 8001:8001 boda175/nodejs
                '''
            }
        }
    }
}