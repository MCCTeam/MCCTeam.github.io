# Usage

How to run the program:

-   [Running on Windows](#windows)
-   [Running on Linux, Unix, Mac](#linux-unix-mac)
-   [Running using Docker](#docker)

Using the command line parameters:

-   [Examples](#quick-usage-of-mcc-with-examples)
-   [Command line parameters](#command-line-parameters)
-   [Internal commands](#internal-commands)

## Windows

Simply run `MinecraftClient.exe`

## Linux, Unix, Mac

To run the client you need to type the following command in your terminal emulator:

```bash
mono MinecraftClient.exe
```

If you want to keep it running in the background you can use `screen` (Linux and Unix only)
Example:

```bash
# Start the screen
screen -S mcc

# Run it
mono MinecraftClient.exe

# Detach from the screen by pressing CTRL + A + D

# Re-attach if you want to have acces again
screen -r mcc
```

_Learn more on how to use the screen command: [Youtube](https://www.youtube.com/watch?v=_ZJiEX4rmN4)_

Some potential issues:

-   If you cannot authenticate on Mono because you have TLS/HTTPS/Certificate errors, you'll need to run `mozroots --import --ask-remove` once or install `ca-certificates-mono` (See [#1708](https://github.com/MCCTeam/Minecraft-Console-Client/issues/1708#issuecomment-893768862)).
-   If Mono crashes, try installing `mono-complete` instead of `mono-runtime`, also use at least Mono v4.0.

_Note: Commands and package names may differ depending on your distro._

## Docker

See [Run using Docker](/guide/installation.md#using-docker)

## Command-line usage

**Minecraft Console Client** has a plethera of useful command line parameters, here you can learn about them.

### For people not familiar with the command line

For people who are not familiar with the usage of programs in the command line (terminal emulators), here we will explain what every single thing means, if you're already experienced you can skip this.

In command line (terminal emulators) you can run programs by specifying their name and hitting enter, usually programs have additional way of being configured, started or provided some additional data in a different maner, this is achieved by using command line parameters.

Command line parameters are written after the name of the program, they're spearated by space and they can have few different formats, examples:

-   `someparameter`
-   `-some-parameter`
-   `--some-other-parameter`
-   `--some-setting="some value"`
-   `-a=5`

Parameters with a single dash (`-`) are usually used for a single letter (short-hand) parameters, while the ones with a double dash (`--`) are being used for parameters with a longer/full name.

When you are reading examples, you will often see something like this: `<something here>`, this means that this is a place holder and it should be changed with some value, excluding the `<` and the `>`.

For example `<username>` you need to change to an username of your liking, example: `notch` (`<` and `>` should not be included).

`[` and `]` mean that a parameter is an optional one.

They also can hold some values, example from the MCC:

```bash
MinecraftClient.exe --debugmessages=false
```

When a parameter has a textual value that includes one more spaces, you will need to wrap it the value in double quotes (`"`), example: `--some-parameter="some text here with spaces in it"`

Here is an example for using a `--help` command line parameter for MCC that will print out a page on how to use MCC from the command line:

```bash
MinecraftClient.exe --help
```

### Quick usage of MCC with examples

```bash
MinecraftClient.exe --help
MinecraftClient.exe <username> <password> <server>
MinecraftClient.exe <username> <password> <server> "/mycommand"
MinecraftClient.exe --setting=value [--other settings]
MinecraftClient.exe --section.setting=value [--other settings]
MinecraftClient.exe <settings-file.ini> [--other settings]
```

Examples:

```bash
# Logging in as a user: notch, with a password: password123 onto a server with the ip: mc.someserver.com:25565
MinecraftClient.exe notch password123 mc.someserver.com:25565

# Overriding a setting from MinecraftClient.ini using a command line parameter
MinecraftClient.exe --debugmessages=false

# Providing a custom settings ini file and overriding a language to Chinese
MinecraftClient.exe CustomSettingsFile.ini --language=zh
```

### Rules of using the command line parameters

You can mix and match arguments by following theses rules:

-   First positional argument may be either the login or a settings file
-   Other positional arguments are read in order: login, password, server, command
-   Arguments starting with `--` can be in any order and position

Examples and further explanations:

```bash
MinecraftClient.exe <login> <password> <server>
```

-   This will automatically connect you to the chosen server.
-   You may omit password and/or server to specify e.g. only the login
-   To specify a server but ask password interactively, use `""` as password.
-   To specify offline mode with no password, use `-` as password.

```bash
MinecraftClient.exe <login> <password> <server> "/mycommand"
```

-   This will automatically send `/mycommand` to the server and close.
-   To send several commands and/or stay connected, use the ScriptScheduler bot instead.

```bash
MinecraftClient.exe <myconfig.ini>
```

-   This will load the specified configuration file
-   If the file contains login / password / server ip, it will automatically connect.

```bash
MinecraftClient.exe --setting=value [--other settings]
```

-   Specify settings on the command-line, see possible value in the configuration file
-   Use `--section.setting=value` for settings outside the `[Main]` section
-   Example: `--antiafk.enabled=true` for enabling the AntiAFK bot

```bash
MinecraftClient.exe <myconfig.ini> <login> <password> <server> [--other settings]
```

-   Load the specified configuration file and override some settings from the file

## Internal Commands

These commands can be performed from the chat prompt, scripts or remote control.

From chat prompt, commands must by default be prepended with a slash, eg. `/quit`.

In scripts and remote control, no slash is needed to perform the command, eg. `quit`.

### `quit`

-   Alias: `exit`
-   Description:

    Disconnect from the server and close the application

### `reco`

-   Description:

    Disconnect and reconnect to the server

-   Usage:

    ```
    reco [account]
    ```

### `connect`

-   Description:

    Go to the given server and resume the script

-   Usage:

    ```
    connect <server> [account]
    ```

### `script`

-   Description:

    Run a script containing a list of commands

-   Usage:

    ```
    script <script name>
    ```

### `send`

-   Description:

    Send a message or a command to the server

-   Usage:

    ```
    send <text>
    ```

### `respawn`

-   Description:

    Use this to respawn if you are dead (like clicking "respawn" ingame)

### `log`

-   Description:

    Display some text in the console (useful for scripts)

-   Usage:

    ```
    log <text>
    ```

### `list`

-   Description:

    List players logged in to the server (uses tab list info sent by server)

### `set`

-   Description:

    Set a value which can be used as `%variable%` in further commands

-   Usage:

    ```
    set <variable>=<value>
    ```

-   Examples:

    ```
    set abc=123
    ```

### `setrnd`

-   Description:

    Set a `%variable%` randomly to one of the provided values

-   Usage:

    ```
    setrnd <variable> string1 "\"string2\" string3"
    ```

-   Examples:

    ```
    setrnd <variable> -7to10
    ```

    (Set a `%variable%` to a number from -7 to 9)

### `wait`

-   Description:

    Wait X ticks (10 ticks = ~1 second. Only for scripts)

-   Usage:

    ```
    wait <time>
    ```

-   Examples:

    ```
    wait 20
    ```

### `move`

-   Description:

    Used for moving when terrain and movements feature is enabled

### `look`

-   Description:

    Used for looking at direction when terrain and movements is enabled

### `debug`

-   Description:

    Toggle debug messages, useful for chatbot developers

### `help`

-   Description:

    Show command help. Tip: Use "/send /help" for server help

**Notes:**

-   Some commands may not be documented yet, use `help` to list them all, or you can contribute to this page.

-   `[account]` is an account alias defined in accounts file, read more below.

-   `<server>` is either a server IP or a server alias defined in servers file
