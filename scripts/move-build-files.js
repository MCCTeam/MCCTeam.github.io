const FS = require("fs");
const NCP = require("ncp").ncp;
const Path = require("path");

(() => {
    const originalBuildFilesPath = Path.resolve(process.cwd(), "source", ".vuepress", "dist");
    const destinationBuildFilesPath = Path.resolve(process.cwd());
    const desinationAssetsPath = Path.resolve(destinationBuildFilesPath, "assets");
    const desinationGuidePath = Path.resolve(destinationBuildFilesPath, "guide");
    const desinationIndexPath = Path.resolve(destinationBuildFilesPath, "index.html");
    const desination404Path = Path.resolve(destinationBuildFilesPath, "404.html");

    // Check if the project was not built
    if (!FS.existsSync(originalBuildFilesPath)) {
        console.log(`Error: You haven't built the project, use "yarn docs:build" first!`);
        return;
    }

    // Remove the old "/assets" directory and re-create it
    if (FS.existsSync(desinationAssetsPath)) {
        FS.rmSync(desinationAssetsPath, { recursive: true }, (error) => {
            if (error) {
                console.log(`Failed to delete the "/assets" directory!`);
                console.log(`Error:`);
                console.error(error);
                return;
            }
        });

        FS.mkdirSync(desinationAssetsPath);
    }

    // Remove the old "/guide" directory and re-create it
    if (FS.existsSync(desinationGuidePath)) {
        FS.rmSync(desinationGuidePath, { recursive: true }, (error) => {
            if (error) {
                console.log(`Failed to delete the "/guide" directory!`);
                console.log(`Error:`);
                console.error(error);
                return;
            }
        });

        FS.mkdirSync(desinationGuidePath);
    }

    // Remove the old index.html
    if (FS.existsSync(desinationIndexPath)) FS.unlinkSync(desinationIndexPath);

    // Remove the old 404.html
    if (FS.existsSync(desination404Path)) FS.unlinkSync(desination404Path);

    // Copy over the files from source/.vuepress/dist to /
    NCP(originalBuildFilesPath, destinationBuildFilesPath, (error) => {
        if (error) {
            console.log(`Failed to move the build files to the "/" directory!`);
            console.log(`Error:`);
            console.error(error);
            return;
        }

        console.log(`Succesfully moved the build files to the "/" directory!`);

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
