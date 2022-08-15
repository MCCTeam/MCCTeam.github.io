# Chat Bots

-   [About](#about)
-   [List of built-in Chat Bots](#list-of-built-in-chat-bots)
-   [Creating your own](creating-bots.md)

## About

**Minecraft Console Client** has a number of default built in Chat Bots (Scripts/Plugins) which allow for various types of automation.

> **NOTE: Settings refer to settings in the [configuration file](configuration.md)**

## List of built-in Chat Bots

-   [Alerts](#alerts)
-   [Anti AFK](#anti-afk)
-   [Auto Relog](#auto-relog)
-   [Chat Log](#chat-log)
-   [Script Scheduler](#script-scheduler)
-   [Remote Control](#remote-conrol)
-   [Auto Respond](#auto-respond)
-   [Auto Attack](#auto-attack)
-   [Auto Eat](#auto-eat)
-   [Auto Craft](#auto-craft)
-   [Auto Drop](#auto-drop)
-   [Replay Mod](#replay-mod)

## Alerts

-   **Description:**

    Get alerted when specified words are detected in the chat

    Useful for moderating your server or detecting when someone is talking to you.

-   **Settings:**

    **Section:** **`Alerts`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Alerts Chat Bot is enabled.

        Available values: `true` and `false`.

    -   **Default:** `false`

    #### `alertsfile`

    -   **Description:**

        This setting specifies the path to the file which contains a list of strings/words that you want to be alerted on. Each word is written in a new line.

        > **NOTE: This file is not create by default, you need to create it yourself.**

    -   **Default:** `alerts.txt`

    #### `excludesfile`

    -   **Description:**

        This setting specifies the path to the file which contains a list of strings/words that you **do not want to be alerted with**. Each word is written in a new line.

        > **NOTE: This file is not create by default, you need to create it yourself.**

    -   **Default:** `alerts-exclude.txt`

    #### `beeponalert`

    -   **Description:**

        This setting specifies if you want to hear a beep when you get an alert.

        > **NOTE: This might not work depending on your system or a console (terminal emulator).**

    -   **Default:** `true`

## Anti AFK

-   **Description:**

    Make MCC send a command on a regular basis to avoid automatic AFK disconnection.

-   **Settings:**

    **Section:** **`AntiAFK`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Anti AFK Chat Bot is enabled.

        Available values: `true` and `false`.

    -   **Default:** `false`

    #### `delay`

    -   **Description:**

        Delay in ticks.
        **10 ticks = 1 second**

    -   **Default:** `600`

    #### `command`

    -   **Description:**

        Command to be sent.

    -   **Default:** `/ping`

## Auto Relog

-   **Description:**

    Make MCC automatically relog when disconnected by the server, for example because the server is restating.

-   **Settings:**

    **Section:** **`AutoRelog`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Relog Chat Bot is enabled.

        Available values: `true` and `false`.

    -   **Default:** `false`

    #### `delay`

    -   **Description:**

        Delay in seconds.

        > **NOTE: You can use `X-Y` for a random number of seconds between `X` and `Y`, eg. `10-60` will be a random number between 10 and 60.**

    -   **Default:** `10`

    #### `retries`

    -   **Description:**

        Number of retries.

        Use `-1` for infinite retries.

        > **NOTE: This might get you banned by the server owners.**

    -   **Default:** `/-1`

    #### `kickmessagesfile`

    -   **Description:**

        This settings specifies a path to the file with list of keywords that if found in kick messages will trigger Auto Relog chat bot. Each word is written on a new line.

        > **NOTE: This file is not create by default, you need to create it yourself.**

    -   **Default:** `kickmessages.txt`

    #### `ignorekickmessage`

    -   **Description:**

        THis settings specifies if the `kickmessagesfile` setting will be ignored, if set to `true` it will auto relog regardless of the kick messages.

    -   **Default:** `true`

## Chat Log

-   **Description:**

    Make MCC log chat messages into a file.

-   **Settings:**

    **Section:** **`ChatLog`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Chat Log Chat Bot is enabled.

        Available values: `true` and `false`.

    -   **Default:** `false`

    #### `timestamps`

    -   **Description:**

        This setting specifies if the Chat Log should prepend timestamps to the logged messages.

        Available values: `true` and `false`.

    -   **Default:** `true`

    #### `filter`

    -   **Description:**

        Type of messages to be logged into the file.

        Available values:

        -   `all` all text from the console)
        -   `messages` (all messages, including system, plugin channel, player and server)
        -   `chat` (only chat messages)
        -   `private` (only private messages)
        -   `internal` (only internal messages and commands)

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

        Available values: `true` and `false`.

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

        -   `action`

            Specifies an internal command to be run when the task triggers.

            **Example**: `script my-script.txt`

        **Check out the examples with detailed explanations in [sample-tasks.ini](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-tasks.ini)**

        > **NOTE: This file is not created by default, we recommend making a clone of the [`sample-tasks.ini`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-tasks.ini) and changing it accodring to your needs.**

    -   **Default:** `tasks.ini`

## Remote Control

-   **Description:**

    Send MCC console commands to your bot through server PMs (`/tell`).

    You need to have [ChatFormat](configuration.md#chat-format) working correctly and add yourself in [botowners](configuration.md#botowners) to use the bot.

    > **WARNING: Server admins can spoof PMs (`/tellraw`, `/nick`) so enable `RemoteControl` only if you trust server admins.**

-   **Settings:**

    **Section:** **`RemoteControl`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Remote Control Chat Bot is enabled.

        Available values: `true` and `false`.

    -   **Default:** `false`

    #### `autotpaccept`

    -   **Description:**

        This setting specifies if the Remote Control Chat Bot should automatically accept teleport requests.

        Available values: `true` and `false`.

    -   **Default:** `true`

    #### `tpaccepteveryone`

    -   **Description:**

        This setting specifies if the Remote Control Chat Bot should automatically accept teleport requests from everyone.

        Available values: `true` and `false`.

    -   **Default:** `false`

## Auto Respond

-   **Description:**

    Run commands or send messages automatically when a specified pattern is detected in the chat.

    > **WARNING: Server admins can spoof PMs (`/tellraw`, `/nick`) so enable `AutoRespond` only if you trust server admins.**

    > **WARNING: This bot may get spammy depending on your rules, although the global [messagecooldown](configuration.md#messagecooldown) setting can help you avoiding accidental spam.**

-   **Settings:**

    **Section:** **`AutoRespond`**

    #### `enabled`

    -   **Description:**

        This setting specifies if the Auto Respond Chat Bot is enabled.

        Available values: `true` and `false`.

    -   **Default:** `false`

    #### `matchesfile`

    -   **Description:**

        This setting specifies the path to the file which contains the list of rules for detecting of keywords and responding on them.

        To find out how to configure the rules, take a look at the [`sample-matches.ini`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-matches.ini) which has very detailed examples and a lot of comments.

        _PS: In the future we will document the rules here with examples too._

        > **NOTE: This file is not created by default, we recommend making a clone of the [`sample-matches.ini`](https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/config/sample-matches.ini) and changing it accodring to your needs.**

    -   **Default:** `matches.ini`

## Auto Attack

## Auto Eat

## Auto Craft

## Auto Drop

## Replay Mod
