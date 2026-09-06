
const tabs = ["character","abilities","magic","combat","spells"].forEach(function (button) {
    on("clicked:" + button, function() {
        setAttrs({
            "sheetTab": button
        });
    });
});

// Die configuration and toggle
on("change:die-type-selection", function() {
    getAttrs(["die-type-selection"], function(values) {
        setAttrs({
            "die-type-selection-proxy": values["die-type-selection"]
        });
    });
});

on("clicked:die-toggle-simple", function() {
    setAttrs({
        "selected-die": "stress"
    });
});

on("clicked:die-toggle-stress", function() {
    setAttrs({
        "selected-die": "simple"
    });
});

// Additional fatigue levels
on("change:additionalFatigue", function() {
    getAttrs(["additionalFatigue"], function(values) {
        setAttrs({
            "additionalFatigueProxy": values.additionalFatigue
        });
    });
});

// Laboratory Adding

on("change:repeating_labspecializations:labbonus remove:repeating_labspecializations change:repeating_labspecializations:sactive", function() {
    getSectionIDs("repeating_labspecializations", function(IDArray) {
        var fieldNames = [];
        for (var i=0; i < IDArray.length; i++) {
            fieldNames.push("repeating_labspecializations_" + IDArray[i] + "_labbonus");
            fieldNames.push("repeating_labspecializations_" + IDArray[i] + "_sactive");
        }

        var total = 0;
        getAttrs(fieldNames, function(values) {
            for (var i=0; i < IDArray.length; i++) {
                total += (parseInt(values["repeating_labspecializations_" + IDArray[i] + "_labbonus"])||0) * ( parseInt(values["repeating_labspecializations_" + IDArray[i] + "_sactive"])|| 0 );
            }
            setAttrs({
                "labbonus_total": total
            });
        });
    });
});



// Duplicate the global bonuses inside the weapons repeating section for display
// From https://app.roll20.net/forum/post/10297616/how-do-i-reference-a-global-attribute-in-a-span-in-a-repeating-section

const section = "weapons";
const repeating_stats = ["init", "atk", "dfn", "dam", "soak"].map(prop => `combat-mods_total_${prop}`);
const changes = repeating_stats.reduce((str, stat) => `${str} change:${stat.toLowerCase()}`, 'sheet:opened');
on(changes, () => {
    getSectionIDs(`repeating_${section}`, idarray => {
        const fieldnames = idarray.reduce((rows,id) => [...rows, ...repeating_stats.map(stat => `repeating_${section}_${id}_${stat}`)], []);
        getAttrs([...repeating_stats, ...fieldnames], v => {
            const output = {};
            idarray.forEach(id => {
                repeating_stats.forEach(stat => {
                    output[`repeating_${section}_${id}_${stat}`] = v[stat];
                });
            });
            setAttrs(output);
        });
    });
});


// Translation key replacement
on("sheet:opened", function(eventInfo){
    setAttrs({
        "ability_i18n": getTranslationByKey("ability"),
        "armor_i18n": getTranslationByKey("armor"),
        "artes_i18n": getTranslationByKey("artes-lib-"),
        "attack_i18n": getTranslationByKey("attack"),
        "aura_i18n": getTranslationByKey("aura"),
        "bold_i18n": getTranslationByKey("gestures-bold"),
        "bonus_i18n": getTranslationByKey("bonus"),
        "botch_i18n": getTranslationByKey("botch"),
        "characteristic_i18n": getTranslationByKey("characteristic"),
        "communication_i18n": getTranslationByKey("communication-short"),
        "botch_num_i18n": getTranslationByKey("botch-num"),
        "circumstances_i18n": getTranslationByKey("circumstances-m"),
        "circumstantial_i18n": getTranslationByKey("circumstantial"),
        "critical_i18n": getTranslationByKey("critical"),
        "damage_i18n": getTranslationByKey("damage"),
        "defense_i18n": getTranslationByKey("defense"),
        "deficiency_i18n": getTranslationByKey("deficiency"),
        "encumbrance_i18n": getTranslationByKey("encumbrance"),
        "exaggerated_i18n": getTranslationByKey("gestures-exaggerated"),
        "fatigue_i18n": getTranslationByKey("fatigue-m"),
        "firm_i18n": getTranslationByKey("words-firm"),
        "focus_i18n": getTranslationByKey("focus"),
        "form_i18n": getTranslationByKey("form"),
        "gestures_i18n": getTranslationByKey("gestures"),
        "gest-none_i18n": getTranslationByKey("gestures-none"),
        "initiative_i18n": getTranslationByKey("initiative"),
        "loud_i18n": getTranslationByKey("words-loud"),
        "modifiers_i18n": getTranslationByKey("modifiers"),
        "philos_i18n": getTranslationByKey("philos-"),
        "quiet_i18n": getTranslationByKey("words-quiet"),
        "simple-die_i18n": getTranslationByKey("simple"),
        "soakbns_i18n": getTranslationByKey("soak-bonus"),
        "spontaneous_i18n": getTranslationByKey("spontaneous"),
        "stress-die_i18n": getTranslationByKey("stress"),
        "subtle_i18n": getTranslationByKey("gestures-subtle"),
        "technique_i18n": getTranslationByKey("technique"),
        "total_i18n": getTranslationByKey("total"),
        "unselected_i18n": getTranslationByKey("unselected"),
        "words_i18n": getTranslationByKey("words"),
        "words-none_i18n": getTranslationByKey("words-none"),
        "wounds_i18n": getTranslationByKey("wounds"),
        "intelligence_i18n": getTranslationByKey("intelligence"),
        "perception_i18n": getTranslationByKey("perception"),
        "presence_i18n": getTranslationByKey("presence"),
        "communication_i18n": getTranslationByKey("communication"),
        "strength_i18n": getTranslationByKey("strength"),
        "stamina_i18n": getTranslationByKey("stamina"),
        "dexterity_i18n": getTranslationByKey("dexterity"),
        "quickness_i18n": getTranslationByKey("quickness"),
        "ask_short_i18n": getTranslationByKey("ask-short"),
        "global_char_short_i18n": getTranslationByKey("global-short"),
        "intelligence_short_i18n": getTranslationByKey("intelligence-short"),
        "perception_short_i18n": getTranslationByKey("perception-short"),
        "presence_short_i18n": getTranslationByKey("presence-short"),
        "communication_short_i18n": getTranslationByKey("communication-short"),
        "strength_short_i18n": getTranslationByKey("strength-short"),
        "stamina_short_i18n": getTranslationByKey("stamina-short"),
        "dexterity_short_i18n": getTranslationByKey("dexterity-short"),
        "quickness_short_i18n": getTranslationByKey("quickness-short"),
        "creo_i18n": getTranslationByKey("creo"),
        "intellego_i18n": getTranslationByKey("intellego"),
        "muto_i18n": getTranslationByKey("muto"),
        "perdo_i18n": getTranslationByKey("perdo"),
        "rego_i18n": getTranslationByKey("rego"),
        "animal_i18n": getTranslationByKey("animal"),
        "aquam_i18n": getTranslationByKey("aquam"),
        "auram_i18n": getTranslationByKey("auram"),
        "corpus_i18n": getTranslationByKey("corpus"),
        "herbam_i18n": getTranslationByKey("herbam"),
        "ignem_i18n": getTranslationByKey("ignem"),
        "imaginem_i18n": getTranslationByKey("imaginem"),
        "mentem_i18n": getTranslationByKey("mentem"),
        "terram_i18n": getTranslationByKey("terram"),
        "vim_i18n": getTranslationByKey("vim")
    });

    // Alert system has been replaced, this serves no purposes
    // getAttrs(["notNew"], function (values) {
    //     if (values.notNew == 0) {
    //         setAttrs({
    //             "notNew": 1,
    //             "alert-alert-update-v1-7-1": 1,
    //             "alert-alert-update-v1-7": 1,
    //             "alert-alert-update-v1-6-5": 1,
    //             "alert-alert-update-v1-6-4": 1,
    //             "alert-alert-update-v1-6-3": 1,
    //             "alert-alert-update-v1-6-2": 1,
    //             "alert-alert-update-v1-6-1": 1,
    //             "alert-alert-update-v1-6": 1,
    //             "alert-alert-update-v1-51": 1,
    //             "alert-alert-update-v1-5": 1,
    //             "alert-alert-update-v1-4": 1,
    //             "alert-161-spell-update": 1,
    //             "alert-alert-update-v1_6-dataloss": 1,
    //             "alert-alert-update-v1-7-armorylegacy": 1
    //         }); 
    //     }
    // });

    // The spell update has been ported to k-Scaffold, this is unneeded
    // Update old spell art selection to new format
    // Skip it if the Warning banner for that update is closed
    // getAttrs(["alert-161-spell-update"], function(values) {
    //     if (values["alert-161-spell-update"] == 0) {
    //         getSectionIDs("spell", function(idarray) {
    //             const tech_translation = {
    //                 0: "unselected",
    //                 1: "Creo",
    //                 2: "Intellego",
    //                 3: "Muto",
    //                 4: "Perdo",
    //                 5: "Rego"
    //             };
    //             const form_translation = {
    //                 0: "unselected",
    //                 1: "Animal",
    //                 2: "Aquam",
    //                 3: "Auram",
    //                 4: "Corpus",
    //                 5: "Herbam",
    //                 6: "Ignem",
    //                 7: "Imaginem",
    //                 8: "Mentem",
    //                 9: "Terram",
    //                 10: "Vim"
    //             };
    //             for (var i=0; i < idarray.length; i++) {
    //                 const spellid = idarray[i];
    //                 console.log("Update 1.6.1 - Spell arts updater script - scheduling update for spell ID:" + spellid);
    //                 getAttrs(
    //                     [   
    //                         "repeating_spell_" + spellid + "_spell_name",
    //                         "repeating_spell_" + spellid + "_Technique_select",
    //                         "repeating_spell_" + spellid + "_Form_select"
    //                     ],
    //                     function (values) {
    //                         attr_updates = {
    //                             ["repeating_spell_" + spellid + "_spell_tech_name"]: tech_translation[values["repeating_spell_" + spellid + "_Technique_select"]] || "unselected",
    //                             ["repeating_spell_" + spellid + "_spell_form_name"]: form_translation[values["repeating_spell_" + spellid + "_Form_select"]] || "unselected"
    //                         };
    //                         console.log("Update 1.6.1 - Spell arts updater script - " + values["repeating_spell_" + spellid + "_spell_name"] + " (ID " + spellid + ")");
    //                         console.log(attr_updates);
    //                         console.log("Update 1.6.1 - Spell arts updater script - spell " + spellid + " END");
    //                         setAttrs(attr_updates);
    //                     }
    //                 );
    //             }
    //             console.log("Update 1.6.1 - Spell arts updater script - all spell scheduled for update");
    //             setAttrs({"alert-161-spell-update": 1});
    //         });
    //     }
    // });
    
});
