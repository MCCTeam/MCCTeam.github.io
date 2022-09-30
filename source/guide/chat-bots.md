# Chat Bots

-   [About](#about)
-   [List of built-in Chat Bots](#list-of-built-in-chat-bots)
-   [Creating your own](creating-bots.md)

## About

**Minecraft Console Client** has a number of default built in Chat Bots (Scripts/Plugins) which allow for various types of automation.

> **ℹ️ NOTE: Settings refer to settings in the [configuration file](configuration.md)**

## List of built-in Chat Bots

-   [Alerts](#alerts)
-   [Anti AFK](#anti-afk)
-   [Auto Relog](#auto-relog)
-   [Chat Log](#chat-log)
-   [Script Scheduler](#script-scheduler)
-   [Hangman](#hangman)
-   [Remote Control](#remote-control)
-   [Auto Respond](#auto-respond)
-   [Auto Attack](#auto-attack)
-   [Auto Fishing](#auto-fishing)
-   [Auto Eat](#auto-eat)
-   [Auto Craft](#auto-craft)
-   [Mailer](#mailer)
-   [Auto Drop](#auto-drop)
-   [Replay Mod](#replay-mod)
-   [Follow Player](#follow-player)
-   [Map](#map)

## Alerts

-   **Description:**

    Get alerted when specified words are detected in the chat

    Useful for moderating your server or detecting when someone is talking to you.

-   **Settings:**

    **Section:** **`Alerts`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Alerts Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `alertsfile`

    -   **Description:**

        This setting specifies the path to the file which contains a list of strings/words that you want to be alerted on. Each word is written in a new line.

        > **ℹ️ NOTE: This file is not create by default, you need to create it yourself.**

    -   **Default:** `alerts.txt`

    #### `excludesfile`

    -   **Description:**

        This setting specifies the path to the file which contains a list of strings/words that you **do not want to be alerted with**. Each word is written in a new line.

        > **ℹ️ NOTE: This file is not create by default, you need to create it yourself.**

    -   **Default:** `alerts-exclude.txt`

    #### `beeponalert`

    -   **Description:**

        This setting specifies if you want to hear a beep when you get an alert.

        > **ℹ️ NOTE: This might not work depending on your system or a console (terminal emulator).**

    -   **Default:** `true`

## Anti AFK

-   **Description:**

    Send a command and sneak on a regular or random basis or make the bot walk around randomly to avoid automatic AFK disconnection.

-   **Settings:**

    **Section:** **`AntiAFK`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Anti AFK Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `delay`

    -   **Description:**

        Delay in ticks.
        **10 ticks = 1 second**

        If you want a random delay, you can use a range notation: `delay=<min seconds>-<max seconds>`

        Example: `delay=10-100` (_This will use a random delay between 10 and 100 seconds._)

    -   **Default:** `600`

    #### `command`

    -   **Description:**

        Command to be sent.

    -   **Default:** `/ping`

    #### `use_terrain_handling`

    -   **Description:**

        Should the bot use [Terrain Handling](configuration.md#terrainandmovements) instead of the command method.

        This will enable your bot to randomly move about, thus a better anti afk effect.

        > **ℹ️ NOTE: You need to enable [Terrain Handling](configuration.md#terrainandmovements) in the settings and it's recommended to put the bot into an enclosure not to wander off. (Recommended size 5x5x5)**

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `walk_range`

    -   **Description:**

        The range which bot will use to walk around (-X to +X and -Z to +Z, Y is not used).

        The bigger the slower the bot might be at calculating the path, recommended 2-5.

    -   **Default:** `5`

    #### `walk_retries`

    -   **Description:**

        This is the number of times the bot will try to pathfind, if he can't find a valid path for 20 times, he will use the command method.

        > **ℹ️ NOTE: This happens on each trigger of the task, so it does not pernamently switch to alternative method.**

    -   **Default:** `20`

## Auto Relog

-   **Description:**

    Make MCC automatically relog when disconnected by the server, for example because the server is restating.

-   **Settings:**

    **Section:** **`AutoRelog`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Relog Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `delay`

    -   **Description:**

        Delay in seconds.

        > **ℹ️ NOTE: You can use `X-Y` for a random number of seconds between `X` and `Y`, eg. `10-60` will be a random number between 10 and 60.**

    -   **Default:** `10`

    #### `retries`

    -   **Description:**

        Number of retries.

        Use `-1` for infinite retries.

        > **ℹ️ NOTE: This might get you banned by the server owners.**

    -   **Default:** `/-1`

    #### `kickmessagesfile`

    -   **Description:**

        This settings specifies a path to the file with list of keywords that if found in kick messages will trigger Auto Relog chat bot.

        Each word is written on a new line.

        > **ℹ️ NOTE: This file is not create by default, you need to create it yourself.**

    -   **Default:** `kickmessages.txt`

    #### `ignorekickmessage`

    -   **Description:**

        This settings specifies if the `kickmessagesfile` setting will be ignored, if set to `true` it will auto relog regardless of the kick messages.

    -   **Default:** `true`

## Chat Log

-   **Description:**

    Make MCC log chat messages into a file.

-   **Settings:**

    **Section:** **`ChatLog`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Chat Log Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `timestamps`

    -   **Description:**

        This setting specifies if the Chat Log should prepend timestamps to the logged messages.

    -   **Available values:** `true` and `false`.

    -   **Default:** `true`

    #### `filter`

    -   **Description:**

        Type of messages to be logged into the file.

        Available values:

        -   `all`

            All text from the console

        -   `messages`

            All messages, including system, plugin channel, player and server.

        -   `chat`

            Only chat messages.

        -   `private`

            Only private messages.

        -   `internal`

            Only internal messages and commands.

    -   **Default:** `messages`

    #### `logfile`

    -   **Description:**

        This setting specifies the name of the Chat Log file that will be created.

    -   **Default:** `chatlog-%username%-%serverip%.txt`

## Script Scheduler

-   **Description:**

    Schedule commands and scripts to launch on various events such as server join, date/time or time interval.

-   **Settings:**

    **Section:** **`ScriptScheduler`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Script Scheduler Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `tasksfile`

    -   **Description:**

        This setting specifies the path to the file which will hold defined tasks.

        The file uses the `INI` format, you can read on the format [here](configuration.md#format) if you're not familiar with it.

        Each task is defined as a section: `[Task]` and can have the following settings:

        -   `triggerOnFirstLogin`

            Will trigger the task when you login the first time.

            Available values: `true` and `false`

        -   `triggerOnLogin`

            Will trigger the task each time you login.

            Available values: `true` and `false`

        -   `triggerOnTime`

            This will enable the task to trigger at exact time you have specified with `timeValue`, you can have multiple times defined within a single task.

            Available values: `true` and `false`

        -   `timeValue`

            The time in format `hour:minute` (eg. `6:14`) which will trigged the task when it's that time if `triggerOnTime` is set to `true` (you can have multiple times defined within a single task).

        -   `triggerOnInterval`

            This will enable the task to trigger at certain interval which you've defined in `timeInterval`.

            Available values: `true` and `false`

        -   `timeInterval`

            An interval in seconds, you can only have a single interval defined within a single task.

            If you want a random interval, you can use a range notation: `timeInterval=<min seconds>-<max seconds>`

            Example: `timeInterval=10-100` (_This will use a random interval between 10 and 100 seconds._)

        -   `action`

            Specifies an internal command to be run when the task triggers.

            **Example**: `script my-script.txt`

        **Check out the examples with detailed explanations in [sample-tasks.ini](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-tasks.ini)**

        > **ℹ️ NOTE: This file is not created by default, we recommend making a clone of the [`sample-tasks.ini`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-tasks.ini) and changing it according to your needs.**

    -   **Default:** `tasks.ini`

## Hangman

-   **Description:**

    Hangman game is one of the first bots ever written for MCC, to demonstrate ChatBot capabilities.

    Create a file with words to guess (examples: [`words-en.txt`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/hangman-en.txt), [`words-fr.txt`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/hangman-fr.txt)) and set it in config inside the `[Hangman]` section.

    Also set `enabled` to `true`, then, add your username in the `botowners` INI setting, and finally, connect to the server and use `/tell <bot username> start` to start the game.

    > **ℹ️ NOTE: If the bot does not respond to bot owners, see the [Detecting chat messages](https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/config#detecting-chat-messages) section.**

-   **Settings:**

    **Section:** **`Hangman`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Hangman Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `english`

    -   **Description:**

        This setting specifies if the Hangman Chat Bot should use English.

    -   **Available values:** `true` and `false`.

    -   **Default:** `true`

    #### `wordsfile`

    -   **Description:**

        This setting specifies the path to the file which Hangman will use for the list of words, each word is added on a separate line.

        > **ℹ️ NOTE: This settings file is for English and is not created by the default**

    -   **Default:** `hangman-en.txt`
    -   **Example**: [`words-en.txt`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/hangman-en.txt)

    #### `fichiermots`

    -   **Description:**

        This setting is same as the above but for French.

        > **ℹ️ NOTE: This settings file is for French and is not created by the default**

    -   **Default:** `hangman-fr.txt`
    -   **Example**: [`words-fr.txt`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/hangman-fr.txt)

## Remote Control

-   **Description:**

    Send MCC console commands to your bot through server PMs (`/tell`).

    You need to have [ChatFormat](configuration.md#chat-format) working correctly and add yourself in [botowners](configuration.md#botowners) to use the bot.

    > **⚠️WARNING: Server admins can spoof PMs (`/tellraw`, `/nick`) so enable `RemoteControl` only if you trust server admins.**

-   **Settings:**

    **Section:** **`RemoteControl`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Remote Control Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `autotpaccept`

    -   **Description:**

        This setting specifies if the Remote Control Chat Bot should automatically accept teleport requests.

    -   **Available values:** `true` and `false`.

    -   **Default:** `true`

    #### `tpaccepteveryone`

    -   **Description:**

        This setting specifies if the Remote Control Chat Bot should automatically accept teleport requests from everyone.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

## Auto Respond

-   **Description:**

    Run commands or send messages automatically when a specified pattern is detected in the chat.

    > **⚠️ WARNING: Server admins can spoof PMs (`/tellraw`, `/nick`) so enable `AutoRespond` only if you trust server admins.**

    > **⚠️ WARNING: This bot may get spammy depending on your rules, although the global [messagecooldown](configuration.md#messagecooldown) setting can help you avoiding accidental spam.**

-   **Settings:**

    **Section:** **`AutoRespond`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Respond Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `matchesfile`

    -   **Description:**

        This setting specifies the path to the file which contains the list of rules for detecting of keywords and responding on them.

        To find out how to configure the rules, take a look at the [`sample-matches.ini`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-matches.ini) which has very detailed examples and a lot of comments.

        _PS: In the future we will document the rules here with examples too._

        > **ℹ️ NOTE: This file is not created by default, we recommend making a clone of the [`sample-matches.ini`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-matches.ini) and changing it according to your needs.**

    -   **Default:** `matches.ini`

    #### `matchcolors`

    -   **Description:**

        This setting specifies if the Auto Respond Chat Bot should keep the color formatting send by the server.

        You can use this when you need to match text by colors.

        List of all color codes: [here](https://minecraft.tools/en/color-code.php)

        > **ℹ️ NOTE: This feature uses the `§` symbol for color matching**

    -   **Default:** `true`

## Auto Attack

-   **Description:**

    Automatically attacks hostile mobs around you.

    > **ℹ️ NOTE: You need to have [inventoryhandling](configuration.md#inventoryhandling) and [entityhandling](configuration.md#entityhandling) enabled in order for this bot to work.**

-   **Settings:**

    **Section:** **`AutoAttack`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Attack Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `mode`

    -   **Description:**

        Available values:

        -   `single`

            Target one mob per attack.

        -   `multi`

            Target all mobs in range per attack.

    -   **Default:** `single`

    #### `priority`

    -   **Description:**

        Available values:

        -   `health` (prioritize targeting mobs with lower health)
        -   `distance` (prioritize targeting mobs closer to you)

    -   **Default:** `distance`

    #### `cooldownseconds`

    -   **Description:**

        How long to wait between each attack in seconds.

        Use `auto` to let MCC calculate it based on the server TPS.

    -   **Default:** `auto`

## Auto Fishing

-   **Description:**

    Automatically catch fish using a fishing rod.

    > **ℹ️ NOTE: You need to have [entityhandling](configuration.md#entityhandling) enabled in order for this bot to work.**

    > **ℹ️ NOTE: To use the automatic rod switching and durability check feature, you need to enable [inventoryhandling](configuration.md#inventoryhandling).**

    > **ℹ️ NOTE: Note: To adjust the position or angle after catching a fish, you need to enable [terrainandmovements](configuration.md#terrainandmovements).**

    > **ℹ️ NOTE: A fishing rod with **Mending enchantment** is strongly recommended.**

    **Steps for using this bot (with the default setting)**

    1. Hold a fishing rod and aim towards the sea before login with MCC
    2. Make sure `AutoFish` is `enabled` in config file
    3. Login with MCC
    4. You will be able to see the log "Fishing will start in 3.0 second(s).".

-   **Settings:**

    **Section:** **`AutoFishing`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Fishing Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `antidespawn`

    -   **Description:**

        This option may be used in some special cases, so if it has not been modified before, leave the default value.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `main_hand`

    -   **Description:**

        Whether to use the main hand or off hand to hold the rod.

        Available values:

        -   `true` (Main Hand)
        -   `false` (Off Hand)

    -   **Default:** `true`

    #### `auto_start`

    -   **Description:**

        Whether to start fishing automatically after joining the game or switching worlds.

    -   **Available values:** `true` and `false`.

    -   **Default:** `true`

    #### `cast_delay`

    -   **Description:**

        Wait how many seconds after successfully catching a fish before recasting the rod.

        Available values: Floating-point number. (second)

    -   **Default:** `0.4`

    #### `fishing_delay`

    -   **Description:**

        Effective only when `auto_start = true`.

        After joining the game or switching worlds, wait how many seconds before starting to fish automatically.

        Available values: Floating-point number. (second)

    -   **Default:** `3.0`

    #### `fishing_timeout`

    -   **Description:**

        How long the fish bite is not detected is considered a timeout. It will re-cast after the timeout.

        Available values: Floating-point number. (second)

    -   **Default:** `300.0`

    #### `durability_limit`

    -   **Description:**

        Will not use rods with less durability than this (full durability is 64).

        Set to zero to disable this feature.

        Available values: An integer number from `0` to `64`.

    -   **Default:** `2`

    #### `auto_rod_switch`

    -   **Description:**

        Switch to a new rod from inventory after the current rod is unavailable.

    -   **Available values:** `true` and `false`.

    -   **Default:** `true`

    #### `stationary_threshold`

    -   **Description:**

        For each movement of the fishhook entity (entity movement packet), if the distance on both X and Z axes is below this threshold it will be considered as stationary.

        This is to avoid being detected as a bite during the casting of the hook.

        If set too high, it will cause the rod to be reeled in while casting.

        If set too low, it will result in not detecting a bite.

        Available values: Floating-point number.

    -   **Default:** `0.001`

    #### `hook_threshold`

    -   **Description:**

        For each movement of the fishhook entity (entity movement packet), if it is stationary (check `stationary_threshold`) and its movement on the Y-axis is greater than this threshold, it will be considered to have caught a fish.

        If it is set too high, it will cause normal bites to be ignored.

        If set too low, it can cause small fluctuations in the hook to be recognized as bites.

        Available values: Floating-point number.

    -   **Default:** `0.2`

    #### `log_fishing_bobber`

    -   **Description:**

        When turned on it will be print a log every time a fishhook entity movement packet is received.

        If auto-fishing does not work as expected, turn this option on to adjust `stationary_threshold` and `hook_threshold`, or create an issue and attach these logs.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `location`

    -   **Description:**

        Some plugins do not allow the player to fish in one place for a long time. This setting allows the player to change position/angle after each catch.

        Please leave it blank if you do not need it.

        Available values:

        -   Floating-point numbers can be used for both coordinates and angles
        -   Change the angle only (recommended): `yaw_1, pitch_1; yaw_2, pitch_2; ...; yaw_n, pitch_n`
        -   Change position only: `x1, y1, z1; x2, y2, z2; ...; xn, yn, zn`
        -   Change both angle and position: `x1, y1, z1, yaw_1, pitch_1; x2, y2, z2, yaw_2, pitch_2; ... ;xn, yn, zn, yaw_n, pitch_n`

    -   **Default:** ` `

## Auto Eat

-   **Description:**

    Automatically eat food when your Hunger value is low.

    > **ℹ️ NOTE: You need to have [inventoryhandling](configuration.md#inventoryhandling) enabled in order for this bot to work**

-   **Settings:**

    **Section:** **`AutoEat`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Eat Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `threshold`

    -   **Description:**

        Threshold bellow which the bot will auto eat.

    -   **Default:** `6`

## Auto Craft

-   **Description:**

    Automatically craft items in your inventory or in a crafting table.

    > **ℹ️ NOTE: You need to have [inventoryhandling](configuration.md#inventoryhandling) enabled in order for basic crafting in the inventory to work, in addition if you want to use a crafting table, you need to enable [terrainandmovements](configuration.md#terrainandmovements) in order for bot to be able to reach the crafting table.**

    The bot will automatically generate a default configuration file on first launch, when `enabled` is set to `true` in the `AutoCraft` section in config.

    Useful commands description:

    -   `/autocraft reload`

        Reload the configuration file from the disk.
        You can load your edited `AutoCraft` config without restarting the client.

    -   `/autocraft resetcfg`

        Reset your `AutoCraft` config back to default.
        Use with care!

    -   `/autocraft list`

        List all loaded recipes.

    -   `/autocraft start <name>`

        Start the crafting process with the given recipe name you had defined.

    -   `/autocraft stop`

        Stop the crafting process.

    -   `/autocraft help`

        In-game help command.

    **How to define a recipe?**

    You need to define a new `Recipe` section in the configuration file that the setting `configfile` points to.

    The section needs to contain the following settings:

    -   `name`

        The name of your recipe.

    -   `type`

        Can be `player` or `table`

        > **ℹ️ NOTE: If you're using `table` you need to set the `tablelocation` setting in the `AutoCraft` section to the coordinates of the crafting table (separated by a comma `,`, example: `147,64,-132`).**

    -   `result`

        This is the type of resulting item

    -   `slot<index>=<material type>`

        Now you need to add from `1` to `9` settings depending on the size of the recipe to define the position of each crafting material.

        `<index>` should be substituted with the number of the inventory slot and `<material type>` should be substituted with the type of the crafting material.

        > **ℹ️ NOTE: All item types can be found [here](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Inventory/ItemType.cs).**

        **Examples:**

        -   `slot5=OakPlanks`
        -   `slot9=Diamond`

        **Slots are indexed as following:**

        **`2x2` (Player)**

        ```cs
        ╔═══╦═══╗
        ║ 1 ║ 2 ║
        ╠═══╬═══╣
        ║ 3 ║ 4 ║
        ╚═══╩═══╝
        ```

        **`3x3` (Crafting Table)**

        ```cs
        ╔═══╦═══╦═══╗
        ║ 1 ║ 2 ║ 3 ║
        ╠═══╬═══╬═══╣
        ║ 4 ║ 5 ║ 6 ║
        ╠═══╬═══╬═══╣
        ║ 7 ║ 8 ║ 9 ║
        ╚═══╩═══╩═══╝
        ```

        **Full Example:**

        ```ini
        [AutoCraft]
        tablelocation=128,69,-105
        onfailure=abort

        [Recipe]
        name=fence-gate
        type=table
        result=OakFenceGate
        slot4=Stick
        slot5=OakPlanks
        slot6=Stick
        slot7=Stick
        slot8=OakPlanks
        slot9=Stick
        ```

    After you finished writing your config, you can use `/autocraft start <recipe name>` to start crafting.

    Make sure to provide materials for your bot by placing them in inventory first.

-   **Settings:**

    **Section:** **`AutoCraft`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Craft Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `configfile`

    -   **Description:**

        This setting specifies the path to the configuration file for the bot in which you need to define recipes for crafting.

        > **ℹ️ NOTE: The configuration file will automatically create with default values once you load the bot for the first time.**

        > **The default configuration file contains detailed explanation and example recipes.**

        > **ℹ️ NOTE: All item types can be found [here](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Inventory/ItemType.cs).**

    -   **Default:** `autocraft\config.ini`

## Mailer

-   **Description:**

    Relay messages between players and servers, like a mail plugin.

    This bot can store messages when the recipients are offline, and send them when they join the server.

    The Mailer bot can store and relay mails much like Essential's `/mail` command.

    -   `/tell <Bot> mail [RECIPIENT] [MESSAGE]`: Save your message for future delivery
    -   `/tell <Bot> tellonym [RECIPIENT] [MESSAGE]`: Same, but the recipient will receive an anonymous mail

    The bot will automatically deliver the mail when the recipient is online.
    The bot also offers a /mailer command from the MCC command prompt:

    -   `/mailer getmails`

        Show all mails in the console.

    -   `/mailer addignored [NAME]`

        Prevent a specific player from sending mails.

    -   `/mailer removeignored [NAME]`

        Lift the mailer restriction for this player.

    -   `/mailer getignored`

        Show all ignored players.

    > **⚠️WARNING: The bot identifies players by their name (Not by UUID!). A nickname plugin or a Minecraft rename may cause mails going to the wrong player! Never write something to the bot you wouldn't say in the normal chat (You have been warned!).**

    > **⚠️WARNING: Server admins can spoof PMs (`/tellraw`, `/nick`) so enable `RemoteControl` only if you trust server admins.**

    **Mailer Network:**

    -   The Mailer bot can relay messages between servers.

    -   To set up a network of two or more bots, launch several instances with the bot activated and the same database.

    -   If you launch two instances from one .exe they should synchronize automatically to the same file.

*   **Settings:**

    **Section:** **`Mailer`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Mailer Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `database`

    -   **Description:**

        This setting specifies the path to the file where the Mailer Chat Bot will store the mails.

        This file will be auto created by the Mailer Chat Bot.

    -   **Default:** `MailerDatabase.ini`

## Auto Drop

-   **Description:**

    Automatically drop items you don't need from the inventory.

    > **ℹ️ NOTE: You need to have [inventoryhandling](configuration.md#inventoryhandling) enabled in order for this bot to work**

-   **Settings:**

    **Section:** **`AutoDrop`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Drop Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `mode`

    -   **Description:**

        This setting specifies the mode of the auto dropping.

        Available values:

        -   `include`

            This mode will drop any items specified in the list in the `items` setting.

        -   `exclude`

            This mode will drop any other items than specified in the list in the `items` setting.

            So it would keep the items specified in the list.

        -   `everything`

            Drop any item regardless of the items listed in the `items` setting.

    -   **Default:** `include`

    #### `items`

    -   **Description:**

        This setting is where you can specify a comma `,` separated list of items which you want to drop, or keep.

        > **ℹ️ NOTE: All item types can be found [here](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Inventory/ItemType.cs).**

        Example: `diamond,stone,dirt`

    -   **Default:** ` ` (Empty)

## Replay Mod

-   **Description:**

    Enable recording of the game (`/replay start`) and replay it later using the Replay Mod (https://www.replaymod.com/).

    > **ℹ️ NOTE: Please note that due to technical limitations, the client player (you) will not be shown in the replay file**

    > **⚠️ WARNING: You SHOULD use `/replay stop` or exit the program gracefully with `/quit` OR THE REPLAY FILE MAY GET CORRUPT!**

-   **Settings:**

    **Section:** **`ReplayMod`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Replay Mod Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `backupinterval`

    -   **Description:**

        This setting specifies the time interval in seconds when the replay file should be auto-saved.

        Use `-1` to disable.

    -   **Default:** `300`

## Follow player

-   **Description:**

    This bot enables you to make a bot follow a specific player.

    > **ℹ️ NOTE: The bot can be slow at times, you need to walk with a normal speed and to sometimes stop for it to be able to keep up with you, it's similar to making animals follow you when you're holding food in your hand. This is due to a slow pathfinding algorithm, we're working on getting a better one. You can tweak the update limit and find what works best for you. (NOTE: Do not but a very low one, because you might achieve the opposite, this might clog the thread for terain handling) and thus slow the bot even more.**

    > **ℹ️ NOTE: You need to have [terrainandmovements](configuration.md#terrainandmovements) and [entityhandling](configuration.md#entityhandling) enabled in order for this bot to work.**

-   **Settings:**

    **Section:** **`FollowPlayer`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Follow Player Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `update_limit`

    -   **Description:**

        The rate at which the bot does calculations (10 = 1s).

        You can tweak this if you feel the bot is too slow.

    -   **Default:** `15`

    #### `stop_at_distance`

    -   **Description:**

        Do not follow the player if he is in the range of `X` blocks (prevents the bot from pushing a player in an infinite loop).

    -   **Default:** `3`

## Map

-   **Description:**

    This Chat Bot allows you to render items maps into `.jpg` images.

    This is useful for solving captchas on servers which require it, or saving the map art into an image.

    The maps are **rendered** into `Rendered_Maps` folder.

-   **Commands:**

    When enabled will add the `/maps` command.

    **Usage**:

    ```
    /maps <list/render <id>> | maps <l/r <id>>
    ```

-   **Settings:**

    **Section:** **`Map`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Map Chat Bot is enabled.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `resize_map`

    -   **Description:**

        This setting specifies if the Map Chat Bot should resize the image.

        The default map size is `128x128`.

        > **ℹ️ NOTE: The bigger the size, the less is the quality.**

        > **ℹ️ NOTE: For upscaling your maps you could use (getting a bit better quality): https://deepai.org/machine-learning-model/torch-srgan**

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `resize_to`

    -   **Description:**

        Which size the map should be resized to if `resize_map` is `true`.

    -   **Default:** `256`

    #### `auto_render_on_update`

    -   **Description:**

        This setting specifies if the Map Chat Bot should automatically render maps as they're received from the servers.

        > **⚠️WARNING: On some versions older than 1.17 this could cause some performance issue on older hardware if there a lot of maps being rendered, since map updates are sent multiple times a second. Be careful.**

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`

    #### `delete_rendered_on_unload`

    -   **Description:**

        This setting specifies if the Map Chat Bot should automatically delete rendered maps when un-loaded or reloaded.

    -   **Available values:** `true` and `false`.

    -   **Default:** `true`

    #### `notify_on_first_update`

    -   **Description:**

        This setting specifies if the Map Chat Bot should notify you when it got a map from the server for the first time.

    -   **Available values:** `true` and `false`.

    -   **Default:** `false`
