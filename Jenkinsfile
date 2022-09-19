node {
        load "$JENKINS_HOME/envs/envs_prueba"
        echo "${APP}"
        echo "${TIPO}"
    }
pipeline 
{
    
    agent any

    environment
    {
        name_container  = 'containerClienteSql'
        name_image      = 'api-cliente-sql'
        port_expose     = 8000
        port            = 9900
    }
    
    stages
    {
        stage('Build-Image')
        {
            steps 
            {
                echo 'Inicio' 
                sh 'docker build -t ${name_image} .'
            }
        }
        stage('Kube-Deployment')
        {
            steps
            {
                sh 'docker rm -f ${name_container}'
                echo 'Successfull deployment'
            }
        }
        stage('Kube-Service')
        {
            steps
            {
                sh 'docker rum --name ${name_container} -dp ${port_expose}:${port} ${name_image}'
                echo 'Successfull service'
            }
        }
        
    }
    /*
    post 
    {
        success {
            slackSend channel: '#pruebas', color: 'good', message: "Build deployed successfully - ${name_container}"
        }
        failure{
            slackSend channel: '#pruebas', color: 'danger', message: "Build deployed failure - ${name_container}"
        }
    }
    */
}
