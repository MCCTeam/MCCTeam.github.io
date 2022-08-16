const FS = require("fs");
const NCP = require("ncp").ncp;
const Path = require("path");

(() => {
    const originalBuildFilesPath = Path.resolve(process.cwd(), "source", ".vuepress", "dist");
    const destinationBuildFilesPath = Path.resolve(process.cwd(), "docs");

    // Remove the old "docs" directory and re-create it
    if (FS.existsSync(destinationBuildFilesPath)) {
        FS.rmSync(destinationBuildFilesPath, { recursive: true }, (error) => {
            if (error) {
                console.log(`Failed to delete the "docs" directory!`);
                console.log(`Error:`);
                console.error(error);
                return;
            }
        });
    }

    if (!FS.existsSync(destinationBuildFilesPath)) FS.mkdirSync(destinationBuildFilesPath);

    // Check if the project was not built
    if (!FS.existsSync(originalBuildFilesPath)) {
        console.log(`Error: You haven't built the project, use "yarn docs:build" first!`);
        return;
    }

    // Copy over the files from source/.vuepress/dist to /docs
    NCP(originalBuildFilesPath, destinationBuildFilesPath, (error) => {
        if (error) {
            console.log(`Failed to move the build files to the "docs" directory!`);
            console.log(`Error:`);
            console.error(error);
            return;
        }

        console.log(`Succesfully moved the build files to the "docs" directory!`);

        // Delete the original build files not to have duplicates
        FS.rmSync(originalBuildFilesPath, { recursive: true }, (error) => {
            if (error) {
                console.log(`Failed to delete the "source/.vuepress/dist" directory!`);
                console.log(`Error:`);
                console.error(error);
                return;
            }

            console.log(`Succesfully deleted the "source/.vuepress/dist" directory!`);
        });
    });
})();
