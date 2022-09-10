# Installation

-   [YouTube Tutorials](#youtube-tutorials)
-   [Download a compiled binary](#download-a-compiled-binary)
-   [Building from the source code](#building-from-the-source-code)
-   [Run using Docker](#using-docker)
-   [Run on Android](#run-on-android)

## YouTube Tutorials

If you're not the kind of person that likes textual tutorials, our community has made video tutorials available on YouTube.

-   [Installation on Windows by Daenges](https://www.youtube.com/watch?v=BkCqOCa2uQw)
-   [Installation on Windows + Auto AFK and More by Dexter113](https://www.youtube.com/watch?v=FxJ0KFIHDrY)

## Download a compiled binary

In order to run **Minecraft Console Client** you need [.NET 6.0 or new-er](https://dotnet.microsoft.com/en-us/download)

> **⚠️ IMPORTANT: If you already have .NET, but an older version than `6.0`, please update to `6.0` since MCC might not work as expected or at all.**

#### How to install .NET on your platform

-   [Install .NET on Windows](https://docs.microsoft.com/en-us/dotnet/core/install/windows)
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

> **⚠️ WARNING: Pay attention at warnings, Docker currenly works, but you must start the containers in the interactive mode or MCC will crash, we're working on solving this.**

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

> **⚠️ VERY IMPORTANT ⚠️: There is a bug with the ConsoleInteractive which causes a crash when a container is started in a headless mode, so you need to use the interactive mode. Do not restart containers in a classic way, stop then and start them with interactive mode (this command), after that simply detach with `CTRL + P` and then `CTRL + Q`.**

```bash
# You could also ignore the -v parameter if you dont want to mount the volume that is up to you. If you don't it's harder to edit the .ini file if thats something you want to do
docker run -it -v <PATH_ON_YOUR_MACHINE_TO_MOUNT>:/opt/data minecraft-console-client:latest
```

Now you could login and the Client is running. 
To detach from the Client but still keep it running in the Background press: `CTRL + P` and then after `CTRL + Q`.
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

## Run on Android

It is possible to run the Minecraft Console Client on Android through Termux and Ubuntu 22.04 in it, however it requires a manual setup with a lot of commands, be careful no to skip any steps. Note that this might take anywhere from 10 to 20 minutes or more to do depending on your technical knowledge level, Internet speed and CPU speed.

> **ℹ️ NOTE: This section is going to get a bit technical, I'll try my best to make everything as simple as possible. If you are having trouble following along or if you encounter any issues, feel free to open up a discussion on our Github repository page.**

> **ℹ️ NOTE: You're required to have some bare basic knowledge of Linux, if you do not know anything about it, watch [this video](https://www.youtube.com/watch?v=SkB-eRCzWIU) to get familiar with basic commands.**

> **ℹ️ NOTE: Here we're installing everything on the root account for simplicity sake, if you want to make a user account, make sure you update the command which reference the `/root` directory with your home directory.**

### Installation

#### Termux

> **⚠️ IMPORTANT: The Play Store version of Termux is outdated and not supported, do not use it, use the the [Github one](https://github.com/termux/termux-app/releases/latest/).**

Go to [the Termux Github latest release](https://github.com/termux/termux-app/releases/latest/), download the `debug_universal.apk`, unzip it and run it.

> **ℹ️ NOTE: If your file manager does not let you run APK files, install and use `File Manager +` and give it a permission to install 3rd party applications when asked.**

> **⚠️ VERY IMPORTANT ⚠️: Once you have installed Termux, open it, bring down the Android menu for notifications, on Termux notification, drag down until you see the following options: `Exit | Acquire wakelock`, press on the `Acquire wakelock` and allow Termux to have a battery optimization exclusion permission when asked. If you do not do this, your performance will be poorer and the Termux might get killed by Android while running in the background!**

#### Installing Ubuntu 22.04

At this stage, you have 2 options:

1. Following this textual tutorial
2. Watching a [Youtube tutorial for installing Ubuntu](https://www.youtube.com/watch?v=5yit2t7smpM)

> **ℹ️ NOTE: If you decide to watch the Youtube tutorial, watch only up to `1:58`, the steps after are not needed and might just confuse you.**

In order to install Ubuntu 22.04 in Termux you require `wget` and `proot`, we're going to install them in the next step.

Once you have Termux installed open it up and run the following command one after other (in order):

1. `pkg update`
2. `pkg upgrade`
3. `pkg install proot wget`

> **ℹ️ NOTE: If you're asked to press Y/N during the update/upgrade command process, just enter Y and press Enter**

Then you need to download an installation script using the following command:

```bash
wget https://raw.githubusercontent.com/MFDGaming/ubuntu-in-termux/master/ubuntu.sh
```

Once the script has downloaded, run it with:

```bash
bash ubuntu.sh
```

Then you will be asked a question, enter `Y` and press `Enter`.
Once the installation is complete, you can start Ubuntu with:

```bash
./startubuntu.sh
```

> **ℹ️ NOTE: Now every time you open Termux after it has been closed, in order to access Ubuntu you have to use this command**

#### Installing .NET

Since there are issues installing .NET 6.0 via the APT package manager at the time of writing, we will have to install it manually.

First we need to update the APT package manager repositories and install dependencies.

To update the APT repositories, run the following command:

```bash
apt update -y && apt upgrade -y
```

After you did it, we need to install dependencies for .NET, with the following command:

```bash
apt install wget nano unzip libc6 libgcc1 libgssapi-krb5-2 libstdc++6 zlib1g libicu70 libssl3 -y
```

After you have installed dependencies, it's time to install .NET, you either can follow this tutorial or the [Microsoft one](https://docs.microsoft.com/en-us/dotnet/core/install/linux-scripted-manual#manual-install).

Navigate to your `/root` home directory with the following command:

```bash
cd /root
```

First you need to download .NET 6.0, you can do it with the following command:

```bash
wget https://download.visualstudio.microsoft.com/download/pr/901f7928-5479-4d32-a9e5-ba66162ca0e4/d00b935ec4dc79a27f5bde00712ed3d7/dotnet-sdk-6.0.400-linux-arm64.tar.gz
```

> **ℹ️ NOTE: This tutorial assumes that you have 64 bit version of ARM processor, if you happen to have a 32-bit version replace the link in the command above with [this one](https://download.visualstudio.microsoft.com/download/pr/cf567026-a29a-41aa-bc3a-e4e1ad0df480/0925d411e8e09e31ba7a39a3eb0e29af/aspnetcore-runtime-6.0.8-linux-arm.tar.gz)**.

> **ℹ️ NOTE: This tutorial assumes that you're following along and using Ubuntu 22.04, if you're using a different distro, like Alpine, go to [here](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) and copy an appropriate link for your distro.**

Once the file has been downloaded, you need to run the following commands in order:

1. `DOTNET_FILE=dotnet-sdk-6.0.400-linux-arm64.tar.gz`

    **⚠️ IMPORTANT: If you're using a different download link, update the file name in this command to match your version.**

2. `export DOTNET_ROOT=/root/.dotnet`

    **⚠️ IMPORTANT: Here we're installing .NET in `/root`, if you're installing it somewhere else, make sure to set your own path!**

3. `mkdir -p "$DOTNET_ROOT" && tar zxf "$DOTNET_FILE" -C "$DOTNET_ROOT"`
4. `export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools`

Now we need to tell our shell to know where the `dotnet` command is, for future sessions, since the commands above just tell this current session where the `dotnet` is located.

> **⚠️ IMPORTANT: You will need a basic knowledge of Nano text editor, if you do not know how to use it, watch this [Youtube video tutorial](https://www.youtube.com/watch?v=DLeATFgGM-A)**

To enable this, we need to edit our `/root/.bashrc` file with the following command:

```bash
nano /root/.bashrc
```

Scroll down to the bottom of the file using `Page Down` (`PGDN`) button, make a new line and paste the following text:

```bash
export DOTNET_ROOT=/root/.dotnet/
export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools
```

**⚠️ IMPORTANT: Here we're installing .NET in `/root`, if you're installing it somewhere else, make sure to set your own path!**

Save the file usign the following combination of keys: `CTRL + X`, type `Y` and press Enter.

Veryfy that .NET was installed correctly by running:

```bash
dotnet
```

You should get a help page:

```bash
root@localhost:~# dotnet

Usage: dotnet [options]
Usage: dotnet [path-to-application]

Options:
  -h|--help         Display help.
  --info            Display .NET information.
  --list-sdks       Display the installed SDKs.
  --list-runtimes   Display the installed runtimes.

path-to-application:
  The path to an application .dll file to execute.
```

#### Installing MCC

Finally, we can install MCC.

**⚠️ IMPORTANT: If you have a 32 ARM processor, you need to build the MCC yourself, take a look at the [Buidling From Source](#building-from-the-source-code) section. Also make sure to be using the appropriate `-r` parameter value for your architecture.**

Let's make a folder where the MCC will be stored with the following command:

```bash
mkdir MinecraftConsoleClient
```

Then enter it the newly created folder:

```bash
cd MinecraftConsoleClient
```

Download the MCC with the following command:

```bash
wget https://github.com/MCCTeam/Minecraft-Console-Client/releases/latest/download/MinecraftClient-linux-arm64.zip
```

Unzip it with the following command:

```bash
unzip MinecraftClient-linux-arm64.zip
```

You can remove the zip archive now, we do not need it anymore, with:

```bash
rm MinecraftClient-linux-arm64.zip
```

And finally run it with:

```
./MinecraftClient
```

#### After installation

When you run Termux next time, you need to start Ubuntu with: `./startubuntu.sh`

Then you can start the MCC again with `./MinecraftClient`

To stop MCC from running you can press `CTRL + C`

To edit the configuration/settings, you need a text editor, we recommend Nano, as it's very simple to use, if you have followed the installation steps above, you should be familiar with it, if not, check out [this tutorial](https://www.youtube.com/watch?v=DLeATFgGM-A).

For downloading files, you can use the `wget` file we have installed, simply run:
`wget your_link_here` (you have examples above, and a video tutorial down bellow).

Also, here are some linux tutorials for people who are new to it:

-   [Linux Terminal Introduction by ExplainingComputers](https://www.youtube.com/watch?v=SkB-eRCzWIU)
-   [Linux Crash Course - nano (command-line text editor) by Learn Linux TV](https://www.youtube.com/watch?v=DLeATFgGM-A)
-   [Linux Crash Course - The wget Command by Learn Linux TV](https://www.youtube.com/watch?v=F80Z5qd2b_4)
-   [Linux Basics: How to Untar and Unzip Files (tar, gzip) by webpwnized](https://www.youtube.com/watch?v=1DF0dTscHHs)
