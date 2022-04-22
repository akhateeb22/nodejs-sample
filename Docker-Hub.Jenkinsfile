pipeline {
    agent any
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
                script {
                    def containerExists = sh(script: "docker container ls -a -f name=nodejs", returnStdout: true) == 0
                    if (containerExists) {
                        sh '''
                            echo "qwewqeqweqwqweqwew"
                            docker container stop nodejs
                            docker container rm nodejs
                        '''
                    }
                    sh 'docker container run -d --name nodejs -p 8001:8001 boda175/nodejs'
                }
        }
}
}
}