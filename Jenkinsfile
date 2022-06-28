pipeline 
{
    agent any

    environment
    {
        name_container  = 'containerClienteSql'
        name_image      = 'api_cliente_sql'
        port_expose     = 8000
        port            = 9900
    }
    
    stages
    {
        stage('Build')
        {
            steps 
            {
                echo 'Inicio' 
                sh 'docker build -t ${name_image} .'
            }
        }

        stage('Delete')
        {
            steps 
            {
                sh 'docker rm -f ${name_container}'
            }
        }
        stage('Up')
        {
            steps
            {
                sh  'docker run --name ${name_container} -dp ${port_expose}:${port} ${name_image}'
                echo 'Successfull.'
            }
        }
        
    }
    post 
    {
        success {
            slackSend channel: '#pruebas', color: 'good', message: "Build deployed successfully - ${name_container}"
        }
        failure{
            slackSend channel: '#pruebas', color: 'danger', message: "Build deployed failure - ${name_container}"
        }
    }

}
