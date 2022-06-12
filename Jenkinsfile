pipeline 
{
    agent any

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
                sh 'docker build -t api_cliente_sql .'
            }
        }

        stage('Up')
        {
            steps
            {
                sh  'docker run --name containerClienteSql -dp 8000:9900 api_cliente_sql'
            }
        }

        stage('End')
        {
            steps { echo 'Successfull.' }
        }
    }

}
