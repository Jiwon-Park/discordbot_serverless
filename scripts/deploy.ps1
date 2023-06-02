$compress = @{
    Path=".\*"
    DestinationPath="D:\serverless.zip"
}
Compress-Archive -Force @compress