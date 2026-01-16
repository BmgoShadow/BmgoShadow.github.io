// ============================
// HUD STORAGE MODULE
// ============================

export const HUDStorage = (() => {

    // --- Save HUD configuration (merges if exists)
    function save(config) {
        try {
            const existing = localStorage.getItem("hudConfig");
            let finalConfig = config;

            if (existing) {
                const oldConfig = JSON.parse(existing);
                finalConfig = {
                    ...oldConfig,
                    ...config,
                    hud: {
                        ...oldConfig.hud,
                        ...config.hud
                    }
                };
            }

            localStorage.setItem("hudConfig", JSON.stringify(finalConfig));
            console.log("HUD configuration saved/updated.");
        } catch (err) {
            console.error("Failed to save HUD config:", err);
        }
    }

    // --- Load HUD configuration
    function load() {
        try {
            const stored = localStorage.getItem("hudConfig");
            return stored ? JSON.parse(stored) : null;
        } catch (err) {
            console.error("Failed to load HUD config:", err);
            return null;
        }
    }

    // --- Reset HUD configuration
    function reset() {
        try {
            localStorage.removeItem("hudConfig");
            console.log("HUD configuration reset.");
        } catch (err) {
            console.error("Failed to reset HUD config:", err);
        }
    }

    // Export module API
    return {
        save,
        load,
        reset
    };

})();
