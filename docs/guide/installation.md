# Installation

-   [YouTube Tutorials](#youtube-tutorials)
-   [Download a compiled binary](#download-a-compiled-binary)
-   [Building from source](#building-from-the-source-code)
-   [Run using Docker](#using-docker)

## YouTube Tutorials

If you're not the kind of person that likes textual tutorials, our community has made video tutorials available on YouTube.

-   [Installation on Windows by Daenges](https://www.youtube.com/watch?v=BkCqOCa2uQw)
-   [Installation on Windows + Auto AFK and More by Dexter113](https://www.youtube.com/watch?v=FxJ0KFIHDrY)

## Download a compiled binary

#### Windows

In order to run **Minecraft Console Client** on Windows you need the following software:

-   [.NET Framework 6.0 or new-er](https://dotnet.microsoft.com/en-us/download/dotnet-framework)

#### Linux, Mac OS, Unix

In order to run **Minecraft Console Client** on other platforms you need the [**Mono**](https://www.mono-project.com) framework:

-   [Linux Build](https://www.mono-project.com/download/stable/#download-lin)
-   [MacOS Build](https://www.mono-project.com/download/stable/#download-mac)
-   [Other Platforms](https://www.mono-project.com/docs/about-mono/supported-platforms/)

#### Download

You can download a compiled binary file of the latest build from our Releases section on Git Hub: [Download](https://github.com/MCCTeam/Minecraft-Console-Client/releases)

## Building from the source code

### Windows

Requirements:

-   [Git](https://www.git-scm.com/)
-   [.NET 6.0 or new-er](https://dotnet.microsoft.com/en-us/download) or [Visual Studio](https://visualstudio.microsoft.com/) configured for C# app development

Install [Git](https://www.git-scm.com/) and [Visual Studio](https://visualstudio.microsoft.com/) or [.NET 6.0 or new-er](https://dotnet.microsoft.com/en-us/download)

1. Make a new folder where you want to keep the source code
2. Then open it up, hold `SHIFT` and do a `right-click` on the empty white space in the folder
3. Click on `Git Bash Here` in the context menu
4. Clone the [Git Hub Repository](https://github.com/MCCTeam/Minecraft-Console-Client) by typing end executing the following command:

```bash
git clone https://github.com/MCCTeam/Minecraft-Console-Client.git
```

5. Once the repository has been cloned, you can close the `Git Bash` terminal emulator
6. Open up the new cloned folder

#### Visual Studio

1. Open up the `MinecraftClient.sln` via Visual Studio
2. Right click on `MinecraftClient` solution in the `Solution Explorer`
3. Click on `Properties`
4. Open up the `Build` tab and select configuration `Release`
5. Press `CTRL + S` and close the file
6. Right click on `MinecraftClient` solution in the `Solution Explorer`
7. Click `Build`

If the build has succeeded, the compiled binary `MinecraftClient.exe` will be in `MinecraftClient/bin/Release` folder.

#### .NET manually without Visual Studio

1. Open the `MinecraftClient` folder
2. Open the `MinecraftClient.csproj` in a text editor of your choice
3. Find the following line

```csharp
<Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
```

3. Replace `Debug` with `Release` so it will be:

```csharp
<Configuration Condition=" '$(Configuration)' == '' ">Release</Configuration>
```

4. Save and close the file
5. Locate `MSBuild.exe` for .NET inside `C:\Windows\Microsoft.NET\Framework\vX.X.XXXXX`
6. Drag and drop `MinecraftClient.csproj` over `MSBuild.exe` to launch the build

If the build has succeeded, the compiled binary `MinecraftClient.exe` will be in `MinecraftClient/bin/Release` folder.

### Linux, Mac OS, Unix

> **ℹ️ NOTE: Since you're most likely using Linux, Unix or MacOS, I'll assume that you should be able to install git on your own. If you don't search it up for your platofrm, it should be easy**

Requirements:

-   Git
-   Mono
    -   [Linux Build](https://www.mono-project.com/download/stable/#download-lin)
    -   [MacOS Build](https://www.mono-project.com/download/stable/#download-mac)
    -   [Other Platforms](https://www.mono-project.com/docs/about-mono/supported-platforms/)

1. Verify that Mono is installed and can run correctly by following steps on their website
2. Open up a terminal and navigate to the folder where you will store the MCC
3. Clone the [Git Hub Repository](https://github.com/MCCTeam/Minecraft-Console-Client) by typing end executing the following command:

```bash
git clone https://github.com/MCCTeam/Minecraft-Console-Client.git
```

4. Go to the folder you've cloned
5. Go to `MinecraftClient`
6. Run the following command: `msbuild MinecraftClient.csproj` to build the project

If the build has succeeded, the compiled binary `MinecraftClient.exe` will be in `MinecraftClient/bin/Release` folder.

## Using Docker

Requirements:

-   Git
-   Docker

> **ℹ️ NOTE: This section is for more advanced users, if you do not know how to install git or docker, you can take a look at other sections for Git, and search on how to install Docker on your system.**

1. Clone the [Git Hub Repository](https://github.com/MCCTeam/Minecraft-Console-Client) by typing end executing the following command:

```bash
git clone https://github.com/MCCTeam/Minecraft-Console-Client.git
```

2. Navigate to `Minecraft-Console-Client/Docker`
3. Build the image using the following command

```bash
docker build -t minecraft-console-client:latest .
```

**Start the container using Docker:**

```bash
# You could also ignore the -v parameter if you dont want to mount the volume that is up to you. If you don't it's harder to edit the .ini file if thats something you want to do
docker run -it -v <PATH_ON_YOUR_MACHINE_TO_MOUNT>:/opt/data minecraft-console-client:latest
```

Now you could login and the Client is running. To detach from the Client but still keep it running in the Background press: `CTRL + P`, `CTRL + Q`.
To reattach use the `docker attach` command.

**Start the container using docker-compose:**

By default, the volume of the container gets mapped into a new folder named `data` in the same folder the `docker-compose.yml` is stored.

If you don't want to map a volume, you have to comment out or delete the entire volumes section:

```yml
#volumes:
#- './data:/opt/data'
```

Make sure you are in the directory the `docker-compose.yml` is stored before you attempt to start. If you do so, you can start the container:

```bash
docker-compose run MCC
```

Remember to remove the container after usage:

```bash
docker-compose down
```

If you use the INI file and entered your data (username, password, server) there, you can start your container using

```bash
docker-compose up
docker-compose up -d #for deamonized running in the background
```

Note that you won't be able to interact with the client using `docker-compose up`. If you want that functionality, please use the first method: `docker-compose run MCC`.
As above, you can stop and remove the container using

```bash
docker-compose down
```
