param(
    [string]$path,
    [string]$name#To make sure it doesn't exist already

)
Write-Host("hello");
[int]$itemNumber;
for($itemNumber, $identifier=1, $path+"1"; $env:identifier -ne ""; $itemNumber++){
       if($identifier -ne $name)
          $identifier=$path+($itemNumber+1)
       else{
          return $false
       }
}
Write-Host( $name);
[System.Environment]::SetEnvironmentVariable($path+$itemNumber, $name, "User");
return $true;

