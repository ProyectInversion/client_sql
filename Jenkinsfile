pipeline 
{
    agent any

    enviroment
    {
        name_container = 'containerClienteSql'
        name_image = 'api_cliente_sql'
        port_expose = 8000
    }
    
    stages
    {
        stage('Start')
        {
            steps 
            {
                echo 'Inicio' 
            }
        }

        stage('Build')
        {
            steps 
            {
                sh 'docker build -t ${name_image} .'
            }
        }

        stage('Up')
        {
            steps
            {
                sh  'docker run --name ${name_container} -dp ${port_expose}:9900 ${name_image}'
            }
        }

        stage('End')
        {
            steps { echo 'Successfull.' }
        }
    }

}
