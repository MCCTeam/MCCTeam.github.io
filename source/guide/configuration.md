# Configuration

**Minecraft Console Client** can be both configured by the [command line parameters](usage.md#command-line-parameters) and the configuration file.

By the default all of the configurations are stored in the configuration file named `MinecraftClient.ini` which is created the first time you run the program, but you also can specify your own configuration file by providing a path to it as a first parameter when starting the MCC, check out [Usage](usage.md#quick-usage-of-mcc-with-examples) for examples.

## Notes

-   Some settings will be omited from the documentation due to them being not used often, we do not want documentation to be cluttered, we advise you to manually read through the configuration file, where every setting has a description next to it.
-   Some plugin/bot related settings will be covered in the plugins section, not here

## Configuration File

### Format

The configuration file uses the INI format, all of the options are key-value pairs separated into sections.

Sections are defined in-between the square brackets (Example: `[This is a section]`), each occurance of this marks a beginning of a new section.

The settings/options are defined as key-value pairs, where the name of the setting and the value are separated by the equals sign `=` (Example: `some-setting=some value`).

Lines starting with `#` are comments, they do not have an effect on the configuration of the program, their purpose is purely a descriptive one.

Example:

```ini
[Section Name]
Setting-Name=Value
Setting-Name=Value

[Other Section]
# This is a comment explaining what this setting/option does
Other-Setting=Some Value
```

## Main Section

### `login`

-   **Description:**

    This setting is your in-game name (for offline accounts) or email for Microsoft accounts (Mojang accounts do not work anymore)

-   **Example:**

    `login=some.random.player@gmail.com`

### `password`

-   **Description:**

    This setting is your account password.

    > **If you're playing with an offline account, use `-`.**

-   **Example:**

    `password=password123`

### `serverip`

-   **Description:**

    This setting is where you provide an IP of the server on which the client will connect.

-   **Default:** `localhost`

-   **Example:**

    ```
    serverip=us.mineplex.com
    ```

    > Not affiliated or promoting them, just using a popular example

### `type`

-   **Description:**

    This setting is where you define the type of your account: `mojang` or `Microsoft`

    > **ℹ️ NOTE: Mojang accounts do not work anymore**

-   **Default:** `mojang`

-   **Example:**

    ```
    type=microsoft
    ```

### `method`

-   **Description:**

    This setting is where you define the way you will sign in with your Microsoft account, available options are `mcc` and `browser`.

-   **Default:** `mcc`

-   **Example:**

    ```
    method=browser
    ```

### `language`

-   **Description:**

    This setting is where you define which language you want to use.

    When connecting to 1.6+ servers, you will need a translation file to display properly some chat messages.
    These files describe how some messages should be printed depending on your preferred language.

    The client will automatically load en_GB.lang from your Minecraft folder if Minecraft is installed on your computer, or download it from Mojang's servers. You may choose another language in the configuration file.

-   **Default:** `en_GB`

-   **Example:**

    ```
    language=en_GB
    ```

### `consoletitle`

-   **Description:**

    This setting is where you can change the title of the program window if you want to

-   **Default:** `%username%@%serverip% - Minecraft Console Client`

-   **Example:**

    ```
    consoletitle=My Custom Window Name
    ```

### `internalcmdchar`

-   **Description:**

    This setting is where you can change the prefix character of internal MCC commands.

    Available options:

    -   `none`
    -   `slash`
    -   `backslash`

-   **Default:** `slash`

-   **Example:**

    ```
    internalcmdchar=slash
    ```

### `messagecooldown`

-   **Description:**

    This setting is where you can change the minimum delay in seconds between messages to avoid being kicked for spam.

-   **Default:** `1`

### `botowners`

-   **Description:**

    This setting is where you can set the owners of the bots/client which can be used by some plugins. The names are separated by a comma `,` without spaces in-between.

-   **Default:** `Player1,Player2,Player3`

-   **Example:**

    ```
    botowners=Player1,Player2,Player3
    ```

    > **⚠️ WARNING: Admins can impersonate players on versions older than 1.19**

### `mcversion`

-   **Description:**

    This setting is where you can set the version you are playing on.

    Format: `1.X.X`

-   **Default:** `auto`

-   **Example:**

    ```
    mcversion=1.18.2
    ```

    > **ℹ️ NOTE: MCC supports only 1.8 - 1.19**

### `mcforge`

-   **Description:**

    This setting is where you can define if you're playing on a forge server.

    Available options:

    -   `auto`
    -   `true`
    -   `false`

-   **Default:** `auto`

    > **ℹ️ NOTE: Force-enabling only works for MC 1.13 +.**

### `brandinfo`

-   **Description:**

    This setting is where you can change how MCC identifies itself to the server.
    It can be whatever you like, example: `vanilla`, `mcc`, `super-bot`

-   **Default:** `mcc`

-   **Example:**

    ```
    brandinfo=my-super-duper-bot
    ```

### `chatbotlogfile`

-   **Description:**

    This setting is where you can set the path to the file which will contain the logs, leave empty for no log file.

-   **Default:** ``

-   **Example:**

    ```
    chatbotlogfile=my-log.txt
    ```

### `showsystemmessages`

-   **Description:**

    This setting is where you can define if you want to see the system messages (example command block outputs) if you're an OP.

-   **Default:** `true`

### `showxpbarmessages`

-   **Description:**

    This setting is where you can define if you want to see the Boss XP Bar messages.

-   **Default:** `true`

    > **Note: Can create a spam if there is a bunch of withers**

### `showchatlinks`

-   **Description:**

    This setting is where you can define if you want to decode links embedded in chat messages and show them in console.

-   **Default:** `true`

### `showinventorylayout`

-   **Description:**

    This setting is where you can define if you want to have the MCC show you the inventory in a form of an ASCII art when using the `/inventory` internal command.

    How it looks like:

    ![ASCII Art here](http://i.pics.rs/33yn9.png "ASCII Art here")

-   **Default:** `true`

### `terrainandmovements`

-   **Description:**

    This setting is where you can set if you want to enable terrain movement, so you can use command like `/move` and some bots.

    > **⚠️ WARNING: This feature is currently not supported in `1.4.6 - 1.10` and in `1.19`. We're working on bringing it to `1.19` as soon as possible.**

-   **Default:** `false`

### `inventoryhandling`

-   **Description:**

    This setting is where you can set if you want to enable inventory handling using the `/inventory` command.

    > **⚠️ WARNING: This feature is currently not supported in `1.4.6 - 1.10` and in `1.19`. We're working on bringing it to `1.19` as soon as possible.**

-   **Default:** `false`

### `entityhandling`

-   **Description:**

    This setting is where you can set if you want to enable interactions with entities such as players, mobs, minecarts, etc..

    > **⚠️ WARNING: This feature is currently not supported in `1.4.6 - 1.10` and in `1.19`. We're working on bringing it to `1.19` as soon as possible.**

-   **Default:** `false`

    > **ℹ️ NOTE: Sometimes the latest versions might not support this straight away, since Mojang often makes changes to this.**

### `sessioncache`

-   **Description:**

    This setting is where you can define is you want your session info to be stored on the disk or in memory, or not to be stored (this will make you login every time which will add some time to the process).

    You can disable this by using `none`.

    The `disk` option will save your login authorization token on the disk, but this can be a bit of a security risk if someone else has access to your folder where you have MCC installed.

    The `memory` will last until you close down the program.

-   **Default:** `disk`

### `resolvesrvrecords`

-   **Description:**

    Use `false`, `fast` (5s timeout), or `true`.
    Required for joining some servers.

-   **Default:** `fast`

### `accountlist`

-   **Description:**

    This setting allows you to set the path to a file which will hold a list of your accounts and aliases.

    The purpose of this is to have an easy-to-remember alias and to avoid typing account passwords.

    As what you are typing can be read by the server admin if using the remote control feature, using aliases is really important for privacy and for safely switching between accounts.

    An example file can be found [here](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-accounts.txt).

-   **Default:** `accounts.txt`

    > **ℹ️ NOTE: This file is not created by default.**

### `serverlist`

-   **Description:**

    This setting allows you to set the path to a file which will hold a list of servers with their aliases.

    The purpose of this is to have an easy-to-remember alias and to avoid typing the server ip over and over, which allows for faster server switching.

    An example file can be found [here](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-servers.txt).

-   **Default:** `servers.txt`

    > **ℹ️ NOTE: This file is not created by default.**

### `playerheadicon`

-   **Description:**

    This setting allows you to set the icon of the program to be the head of your in-game skin.

-   **Default:** `true`

    > **ℹ️ NOTE: Only works on Windows XP-8 or Windows 10 with old console**

### `exitonfailure`

-   **Description:**

    This setting allows you to define if your want to disable pauses on error, for using MCC in non-interactive scripts

-   **Default:** `false`

### `scriptcache`

-   **Description:**

    This setting allows you to define if your want to have MCC cache compiled scripts for faster load on low-end devices.

-   **Default:** `true`

### `timestamps`

-   **Description:**

    This setting allows you to define if your want to have MCC prepend timestamps to chat messages.

-   **Default:** `false`

### `autorespawn`

-   **Description:**

    This setting allows you to define if your want to auto respawn if you die.

-   **Default:** `false`

    > **ℹ️ NOTE: Make sure the spawn point is safe**

### `minecraftrealms`

-   **Description:**

    This setting allows you to define if your want to enable support for joining Minecraft Realms.

-   **Default:** `true`

### `moveheadwhilewalking`

-   **Description:**

    This setting allows you to define if your want to enable head movement while walking to avoid anti-cheat triggers

-   **Default:** `true`

## Logging Section

### `debugmessages`

-   **Description:**

    This setting allows you to define if your want to see debug messages while the client is running, this is useful when there is a bug and you want to report a problem, or if you're developing a script/bot and you want to debug it.

-   **Default:** `false`

### `chatmessages`

-   **Description:**

    This setting allows you to define if your want to see chat messages.

-   **Default:** `true`

### `warningmessages`

-   **Description:**

    This setting allows you to define if your want to see warning messages.

-   **Default:** `true`

### `errormessages`

-   **Description:**

    This setting allows you to define if your want to see error messages.

-   **Default:** `true`

### `infomessages`

-   **Description:**

    This setting allows you to define if your want to see info messages.
    Most of the messages from MCC.

-   **Default:** `true`

### `chatfilter`

    > **ℹ️ NOTE: Disabled/Commented by default**

-   **Description:**

    This setting allows you to define if your want to filter chat messages being logged using a Regex expression.

    More on Regex [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference).

### `debugfilter`

    > **ℹ️ NOTE: Disabled/Commented by default**

-   **Description:**

    This setting allows you to define if your want to filter debug messages being logged using a Regex expression.

    More on Regex [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference).

### `filtermode`

-   **Description:**

    Can be `blacklist` or `whitelist`

    `blacklist` hides the messages, while the `whitelist` shows the messages that match the Regex expression that you've defined.

-   **Default:** `blacklist`

### `logtofile`

-   **Description:**

    This setting allows you to define if your want to log messages to a file

-   **Default:** `false`

### `logfile`

-   **Description:**

    This setting allows you to define a path to a file where you want to log messages if you have enabled logging to a file with `logtofile=true`.

-   **Default:** `console-log-%username%-%serverip%.txt`

    > **ℹ️ NOTE: %username% and %serverip% will be substituted with your username and the IP address of the server you are connected to.**

### `prependtimestamp`

-   **Description:**

    This setting allows you to define if your want prepend timestamps to messages that are written to the log file.

-   **Default:** `false`

### `savecolorcodes`

-   **Description:**

    This setting allows you to define if your want keep the server color codes in the logged messages.

    Example: `§b`

-   **Default:** `false`

## App Vars

This section allows you to define your own custom settings/variables which you can use in scripts, bots or other setting fields.

To define a variable/setting, simply make a new line with the following format under the `[AppVars]` section:

```ini
<your variable name>=<some value>
```

Example:

```
my-variable1=Hello
myvariable2=World!
```

You can now use it, for example: `%my-variable1% %myvariable2%` will produce an output of: `Hello World!`

## Proxy

Connect to a server via a proxy instead of connecting directly.

### `enabled`

-   **Description:**

    If Mojang session services are blocked on your network, set the value to
    `login` to login using proxy but connect directly to the server.

    If connecting to a port 25565 (Minecraft) is blocked on your network, set the value to `true` to login and connect using the proxy.

-   **Default:** `false`

    > **⚠️ WARNING: Make sure your server rules allow Proxies or VPNs before setting the setting to `true`, or you may face consequences!**

### `type`

-   **Description:**

    The type of your proxy.

    Available options:

    -   `HTTPT`
    -   `SOCKS4`
    -   `SOCKS4a`
    -   `SOCKS5`

-   **Default:** `HTTPT`

### `server`

-   **Description:**

    The proxy server IP and port.

    Format:

    ```
    X.X.X.X:XXXX
    ```

-   **Default:** `0.0.0.0:0000`

### `username`

-   **Description:**

    The proxy account username.

    Only needed for password protected proxies.

-   **Default:** ``

### `password`

-   **Description:**

    The proxy account password.

    Only needed for password protected proxies.

-   **Default:** ``

## Chat Format

The MCC does it best to detect chat messages, but some server have unusual chat formats.

When this happens, you'll need to configure the chat format yourself using settings from this section.

The MCC uses Regular Expressions (Regex) to detect the chat formatting, in case that you're not familiar with Regex you can use the following resources to learn it and test it out:

-   Crash courses:
    -   [Regex video tutorial by Web Dev Simplified](https://www.youtube.com/watch?v=rhzKDrUiJVk)
    -   [Regex on paper by Crack Concepts](https://www.youtube.com/watch?v=9RksQ5YT7FM)
-   In-depth tutorials:

    -   [Quite a long and detailed tutorial by Svetlin Nakov](https://www.youtube.com/watch?v=DS9IO0W7-0Q)
    -   [Microsoft Documentation on Regex](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)

-   Testing Regex expressions online:
    -   [https://regex101.com/](https://regex101.com/)
    -   [https://regexr.com/](https://regexr.com/)

### `builtins`

-   **Description:**

    This setting allows you to define if your want use the default chat formats, or if you want to use the custom ones.

    Set to `false` to use the custom formats defined in `public`, `private` and `tprequest`.

-   **Default:** `true`

    > **ℹ️ NOTE: Do not forget to un-comment `public`, `private` and `tprequest` settings if you want custom chat formats, since they're disabled/commented by default**

### `public`

    > **ℹ️ NOTE: This setting is commented/disabled by default**

-   **Description:**

    This setting allows you to specify a custom chat message format using Regex (Regular expressions).

    More on Regex [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference).

    Only works when `builtins` is set to `false`.

-   **Default:** `^<([a-zA-Z0-9_]+)> (.+)$`

### `private`

    > **ℹ️ NOTE: This setting is commented/disabled by default**

-   **Description:**

    This setting allows you to specify a custom chat message format for private messages using Regex (Regular expressions).

    More on Regex [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference).

    Only works when `builtins` is set to `false`.

-   **Default:** `^([a-zA-Z0-9_]+) whispers to you: (.+)$`

### `tprequest`

    > **ℹ️ NOTE: This setting is commented/disabled by default**

-   **Description:**

    This setting allows you to specify a custom chat message format for a Teleport request using Regex (Regular expressions).

    More on Regex [here](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference).

    Only works when `builtins` is set to `false`.

-   **Default:** `^([a-zA-Z0-9_]+) has requested (?:to|that you) teleport to (?:you|them)\.$`

## MCSettings

Client settings related to language, render distance, difficulty, chat and skins.

### `enabled`

-   **Description:**

    This setting allows you to specify if you want to use settings from this section.

-   **Default:** `true`

### `locale`

-   **Description:**

    Use any language implemented in Minecraft

-   **Default:** `en_US`

### `renderdistance`

-   **Description:**

    Use tiny, short, medium, far, or chunk amount (0 - 255).

-   **Default:** `medium`

### `difficulty`

-   **Description:**

    Available options:

    -   `peaceful`
    -   `easy`
    -   `normal`
    -   `difficult`

-   **Default:** `normal`

### `chatmode`

-   **Description:**

    This setting allows you to effectively mute yourself.

    Available options:

    -   `enabled` (You can chat)
    -   `commands` (You can only do commands)
    -   `disabled`

-   **Default:** `enabled`

### `chatcolors`

-   **Description:**

    This setting allows you to disable chat colors.

-   **Default:** `true`

### `main_hand`

-   **Description:**

    This setting allows you to specify your main hand.

-   **Default:** `left`

### `skin_cape`

-   **Description:**

    This setting allows you to specify if you want to have your skin cape shown.

-   **Default:** `true`

### `skin_hat`

-   **Description:**

    This setting allows you to specify if you want to have your skin hat shown.

-   **Default:** `true`

### `skin_jacket`

-   **Description:**

    This setting allows you to specify if you want to have your skin jacket shown.

-   **Default:** `false`

### `skin_sleeve_left`

-   **Description:**

    This setting allows you to specify if you want to have your left sleeve shown.

-   **Default:** `false`

### `skin_sleeve_right`

-   **Description:**

    This setting allows you to specify if you want to have your right sleeve shown.

-   **Default:** `false`

### `skin_pants_left`

-   **Description:**

    This setting allows you to specify if you want to have your left part of the pants shown.

-   **Default:** `false`

### `skin_pants_right`

-   **Description:**

    This setting allows you to specify if you want to have your right part of the pants shown.

-   **Default:** `false`
