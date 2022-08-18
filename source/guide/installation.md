# Installation

-   [YouTube Tutorials](#youtube-tutorials)
-   [Download a compiled binary](#download-a-compiled-binary)
-   [Building from the source code](#building-from-the-source-code)
-   [Run using Docker](#using-docker)

## YouTube Tutorials

If you're not the kind of person that likes textual tutorials, our community has made video tutorials available on YouTube.

-   [Installation on Windows by Daenges](https://www.youtube.com/watch?v=BkCqOCa2uQw)
-   [Installation on Windows + Auto AFK and More by Dexter113](https://www.youtube.com/watch?v=FxJ0KFIHDrY)

## Download a compiled binary

In order to run **Minecraft Console Client** you need the [.NET Framework 6.0 or new-er](https://dotnet.microsoft.com/en-us/download/dotnet-framework)

#### How to install .NET on your platform

-   [Install .NET on Windows](https://dotnet.microsoft.com/en-us/download/dotnet-framework)
-   [Install .NET on Linux](https://docs.microsoft.com/en-us/dotnet/core/install/linux)
-   [Install .NET on macOS](https://docs.microsoft.com/en-us/dotnet/core/install/macos)

#### Download

You can download a compiled binary file of the latest build from our Releases section on Git Hub: [Download](https://github.com/MCCTeam/Minecraft-Console-Client/releases)

## Building from the source code

### Windows

Requirements:

-   [Git](https://www.git-scm.com/) _(Optional: Install only if you want to clone the repository with Git)_
-   [.NET 6.0 or new-er](https://dotnet.microsoft.com/en-us/download) or [Visual Studio](https://visualstudio.microsoft.com/) configured for C# app development

#### Downloading the source code as a ZIP

Simply download the [source code zip archive](https://github.com/MCCTeam/Minecraft-Console-Client/archive/master.zip) and extract it wherever you like.

#### Cloning using Git

If you do not want to download the ZIP archive.

Install [Git](https://www.git-scm.com/)

1. Make a new folder where you want to keep the source code
2. Then open it up, hold `SHIFT` and do a `right-click` on the empty white space in the folder
3. Click on `Git Bash Here` in the context menu
4. Clone the [Git Hub Repository](https://github.com/MCCTeam/Minecraft-Console-Client) by typing end executing the following command:

```bash
git clone https://github.com/MCCTeam/Minecraft-Console-Client.git --recursive
```

5. Once the repository has been cloned, you can close the `Git Bash` terminal emulator
6. Open up the new cloned folder

#### Building using the Visual Studio

1. Open up the `MinecraftClient.sln` via Visual Studio
2. Right click on `MinecraftClient` solution in the `Solution Explorer`
3. Click on `Properties`
4. Open up the `Build` tab and select configuration `Release`
5. Press `CTRL + S` and close the file
6. Right click on `MinecraftClient` solution in the `Solution Explorer`
7. Click `Build`

If the build has succeeded, the compiled binary `MinecraftClient.exe` will be in `MinecraftClient/bin/Release/net6.0/win-x64/publish` folder.

#### Building using .NET manually without Visual Studio

1. Open the `Minecraft-Console-Client` folder you've cloned or downloaded
2. Open the PowerShell (`Right-Click` on the whitespace and click `Open PowerShell`, or in Windows Explorer: `File -> Open PowerShell`)
3. Run the following command to build the project:

```bash
dotnet publish MinecraftClient -f net6.0 -r win-x64 --no-self-contained -c Release -p:UseAppHost=true -p:IncludeNativeLibrariesForSelfExtract=true -p:DebugType=None
```

If the build has succeeded, the compiled binary `MinecraftClient.exe` will be in `MinecraftClient/bin/Release/net6.0/win-x64/publish` folder.

### Linux, macOS

Requirements:

-   Git _(Optional: Install only if you want to clone the repository with Git)_

    -   Linux:

        > **ℹ️ NOTE: If you're using Linux we will assume that you should be able to install git on your own. If you don't know how, search it up for your distribution, it should be easy. (Debian based distros: `apt install git`, Arch based: `pacman -S git`)**

    -   [Install Git on macOS](https://git-scm.com/download/mac)

-   .NET SDK 6.0 or new-er

    -   [Install .NET on Linux](https://docs.microsoft.com/en-us/dotnet/core/install/linux)
    -   [Install .NET on macOS](https://docs.microsoft.com/en-us/dotnet/core/install/macos)

#### Downloading the source code as a ZIP

Simply download the [source code zip archive](https://github.com/MCCTeam/Minecraft-Console-Client/archive/master.zip) and extract it wherever you like.

#### Cloning using Git

1. Open up a terminal emulator and navigate to the folder where you will store the MCC
2. Recursively clone the [Git Hub Repository](https://github.com/MCCTeam/Minecraft-Console-Client) by typing end executing the following command:

```bash
git clone https://github.com/MCCTeam/Minecraft-Console-Client.git --recursive
```

3. Go to the folder you've cloned (should be `Minecraft-Console-Client`)
4. Run the following command to build the project:

    - On Linux:

        ```bash
        dotnet publish MinecraftClient -f net6.0 -r linux-x64 --no-self-contained -c Release -p:UseAppHost=true -p:IncludeNativeLibrariesForSelfExtract=true -p:DebugType=None
        ```

        > **ℹ️ NOTE: If you're using Linux that is either ARM, 32-bit, Rhel based, Using Musl, or Tirzen, [find an appropriate RID](https://docs.microsoft.com/en-us/dotnet/core/rid-catalog#linux-rids) for your platform and replace the `'-r linux-64` with an appropriate `-r <your RID>` (Example for arm: `-r linux-arm64`)**

    - On macOS:

        ```bash
        dotnet publish MinecraftClient -f net6.0 -r osx-x64 --no-self-contained -c Release -p:UseAppHost=true -p:IncludeNativeLibrariesForSelfExtract=true -p:DebugType=None
        ```

        > **ℹ️ NOTE: If you're not using MAC with Intel, find an appropriate RID for your ARM processor, [find an appropriate RID](https://docs.microsoft.com/en-us/dotnet/core/rid-catalog#macos-rids) and replace the `'-r osx-64` with an appropriate `-r <your RID>` (Example for arm: `-r osx.12-arm64`)**

If the build has succeeded, the compiled binary `MinecraftClient` will be in:

-   Linux: `MinecraftClient/bin/Release/net6.0/linux-x64/publish/`
-   macOS: `MinecraftClient/bin/Release/net6.0/osx-x64/publish/`

## Using Docker

Requirements:

-   Git
-   Docker

> **ℹ️ NOTE: This section is for more advanced users, if you do not know how to install git or docker, you can take a look at other sections for Git, and search on how to install Docker on your system.**

> **⚠️ IMPORTANT: Currently the Docker method of running the MCC is broken due to major changes in the code base, we do not use Mono anymore. We're working on fixing it. For now you could use `screen` method if you want to keep MCC running in the background on your Linux VPS.**

1. Clone the [Git Hub Repository](https://github.com/MCCTeam/Minecraft-Console-Client) by typing end executing the following command:

```bash
git clone https://github.com/MCCTeam/Minecraft-Console-Client.git --recursive
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
