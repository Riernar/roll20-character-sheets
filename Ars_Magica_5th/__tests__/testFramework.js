// This code adapted from Nic Bradley's R20 test framework from the WFRP4e official sheet.
import { vi } from 'vitest';
import _ from 'underscore';
import translation from './translation.json' assert {type:'json'}

/**
 * @namespace {object} mock20
 */
/**
 * @memberof mock20
 * @var
 * A mock environment variable for keeping track of triggers, other character information, and predefined query results.
 * @property {array} triggers - The triggers that have been registered by `on`
 * @property {object} queryResponses - Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.
 */
const environment = {
  attributes:{"update_error_rowid":"","kmodal-settings":0,"botch_formula":"&{template:botch} {{roll= [[{[[?{@{botch_num_i18n}|1}]]d10cs0cf10}=10]] }} {{type=Grouped}}","die-type-selection":"both","isMagi":"yes","kmodal-help":0,"kmodal-history":0,"ArmorWorn":"","ArmorModifiers":"","Fatigue":"0","character_name":"","player_name":"","unspent_xp":"","saga":"","year":"","Confidence":"","ConfidencePoints":"","sheetTab":"character","simple-die":"(1d10cs0cf0) [@{simple-die_i18n}]","stress-die":"ceil(((((1d10cs1cf10 %9) -1)+9) %9) *1.1) [@{stress-die_i18n}]","die-type-selection-proxy":"both","selected-die":"simple","Age":"","MightType":"NoMight","MightScore":"","Warping":"","ApparentAge":"","CurrentMagicMight":"","WarpPoints":"","Warping_effects":"","Birth_Name":"","Year_Born":"","Gender":"","Race_Nationality":"","Place_of_Origin":"","Religion":"","Title_Profession":"","Height":"","Weight":"","Size":"","Handedness":"","Hair":"","Eyes":"","House":"","Covenant":"","sigil":"","DomusMagna":"","Primus":"","Parens":"","CovenantofApprenticeship":"","Personality_Trait1":"","Personality_Trait1_score":"","Personality_Trait2":"","Personality_Trait2_score":"","Personality_Trait3":"","Personality_Trait3_score":"","Personality_Trait4":"","Personality_Trait4_score":"","Personality_Trait5":"","Personality_Trait5_score":"","Personality_Trait6":"","Personality_Trait6_score":"","Reputations1":"","Reputations1_type":"","Reputations1_score":"","Reputations2":"","Reputations2_type":"","Reputations2_score":"","Reputations3":"","Reputations3_type":"","Reputations3_score":"","Reputations4":"","Reputations4_type":"","Reputations4_score":"","Reputations5":"","Reputations5_type":"","Reputations5_score":"","Reputations6":"","Reputations6_type":"","Reputations6_score":"","Intelligence_Description":"","Intelligence_Score":"0","Intelligence_Aging":"0","Perception_Description":"","Perception_Score":"0","Perception_Aging":"0","Presence_Description":"","Presence_Score":"0","Presence_Aging":"0","Communication_Description":"","Communication_Score":"0","Communication_Aging":"0","Strength_Description":"","Strength_Score":"0","Strength_Aging":"0","Stamina_Description":"","Stamina_Score":"0","Stamina_Aging":"0","Dexterity_Description":"","Dexterity_Score":"0","Dexterity_Aging":"0","Quickness_Description":"","Quickness_Score":"0","Quickness_Aging":"0","Decrepitude":"0","Decrepitude_effects":"","Longevity_Scars":"","global_Ability_CharacName":"Intelligence","Creo_Score":"0","Creo_exp":"0","Creo_advancementExp":"1 * ((@{Creo_Score}) + 1)","Creo_totalExp":"1 * (((@{Creo_Score}) + 1) * ((@{Creo_Score}) + 2) / 2)","Creo_Puissant":"0","Intellego_Score":"0","Intellego_exp":"0","Intellego_advancementExp":"1 * ((@{Intellego_Score}) + 1)","Intellego_totalExp":"1 * (((@{Intellego_Score}) + 1) * ((@{Intellego_Score}) + 2) / 2)","Intellego_Puissant":"0","Muto_Score":"0","Muto_exp":"0","Muto_advancementExp":"1 * ((@{Muto_Score}) + 1)","Muto_totalExp":"1 * (((@{Muto_Score}) + 1) * ((@{Muto_Score}) + 2) / 2)","Muto_Puissant":"0","Perdo_Score":"0","Perdo_exp":"0","Perdo_advancementExp":"1 * ((@{Perdo_Score}) + 1)","Perdo_totalExp":"1 * (((@{Perdo_Score}) + 1) * ((@{Perdo_Score}) + 2) / 2)","Perdo_Puissant":"0","Rego_Score":"0","Rego_exp":"0","Rego_advancementExp":"1 * ((@{Rego_Score}) + 1)","Rego_totalExp":"1 * (((@{Rego_Score}) + 1) * ((@{Rego_Score}) + 2) / 2)","Rego_Puissant":"0","Animal_Score":"0","Animal_exp":"0","Animal_advancementExp":"1 * ((@{Animal_Score}) + 1)","Animal_totalExp":"1 * (((@{Animal_Score}) + 1) * ((@{Animal_Score}) + 2) / 2)","Animal_Puissant":"0","Aquam_Score":"0","Aquam_exp":"0","Aquam_advancementExp":"1 * ((@{Aquam_Score}) + 1)","Aquam_totalExp":"1 * (((@{Aquam_Score}) + 1) * ((@{Aquam_Score}) + 2) / 2)","Aquam_Puissant":"0","Auram_Score":"0","Auram_exp":"0","Auram_advancementExp":"1 * ((@{Auram_Score}) + 1)","Auram_totalExp":"1 * (((@{Auram_Score}) + 1) * ((@{Auram_Score}) + 2) / 2)","Auram_Puissant":"0","Corpus_Score":"0","Corpus_exp":"0","Corpus_advancementExp":"1 * ((@{Corpus_Score}) + 1)","Corpus_totalExp":"1 * (((@{Corpus_Score}) + 1) * ((@{Corpus_Score}) + 2) / 2)","Corpus_Puissant":"0","Herbam_Score":"0","Herbam_exp":"0","Herbam_advancementExp":"1 * ((@{Herbam_Score}) + 1)","Herbam_totalExp":"1 * (((@{Herbam_Score}) + 1) * ((@{Herbam_Score}) + 2) / 2)","Herbam_Puissant":"0","Ignem_Score":"0","Ignem_exp":"0","Ignem_advancementExp":"1 * ((@{Ignem_Score}) + 1)","Ignem_totalExp":"1 * (((@{Ignem_Score}) + 1) * ((@{Ignem_Score}) + 2) / 2)","Ignem_Puissant":"0","Imaginem_Score":"0","Imaginem_exp":"0","Imaginem_advancementExp":"1 * ((@{Imaginem_Score}) + 1)","Imaginem_totalExp":"1 * (((@{Imaginem_Score}) + 1) * ((@{Imaginem_Score}) + 2) / 2)","Imaginem_Puissant":"0","Mentem_Score":"0","Mentem_exp":"0","Mentem_advancementExp":"1 * ((@{Mentem_Score}) + 1)","Mentem_totalExp":"1 * (((@{Mentem_Score}) + 1) * ((@{Mentem_Score}) + 2) / 2)","Mentem_Puissant":"0","Terram_Score":"0","Terram_exp":"0","Terram_advancementExp":"1 * ((@{Terram_Score}) + 1)","Terram_totalExp":"1 * (((@{Terram_Score}) + 1) * ((@{Terram_Score}) + 2) / 2)","Terram_Puissant":"0","Vim_Score":"0","Vim_exp":"0","Vim_advancementExp":"1 * ((@{Vim_Score}) + 1)","Vim_totalExp":"1 * (((@{Vim_Score}) + 1) * ((@{Vim_Score}) + 2) / 2)","Vim_Puissant":"0","cast_spontaneous_stress_score":"(@{cast_spontaneous_technique}) + (@{cast_spontaneous_form}) + ([[@{cast_spontaneous_focus}]]) + (@{Stamina_Score}) + (@{gestures}) + (@{words}) + (@{aura}) + (@{fatigue_penalty}) + (@{wound_penalty}) + (-@{encumbrance})","cast_spontaneous_stress_divider":"(2) * ([[1 + (@{cast_spontaneous_deficiency})]])","cast_spontaneous_stress_total_bonus":"(@{cast_spontaneous_total_bonus})","cast_spontaneous_technique":"0 [@{technique_i18n}]","cast_spontaneous_form":"0 [@{form_i18n}]","cast_spontaneous_focus":0,"cast_spontaneous_deficiency":0,"cast_spontaneous_sta":"@{Stamina_Score}","cast_spontaneous_aura":"@{aura}","cast_spontaneous_total_bonus":"0","cast_ceremonial_stress_score":"(@{cast_ceremonial_technique}) + (@{cast_ceremonial_form}) + ([[@{cast_ceremonial_focus}]]) + (@{Stamina_Score}) + (@{cast_artes_lib}) + (@{cast_philos}) + (@{gestures}) + (@{words}) + (@{aura}) + (@{fatigue_penalty}) + (@{wound_penalty}) + (-@{encumbrance})","cast_ceremonial_stress_divider":"(2) * ([[1 + (@{cast_ceremonial_deficiency})]])","cast_ceremonial_stress_total_bonus":"(@{cast_ceremonial_total_bonus})","cast_ceremonial_technique":"0 [@{technique_i18n}]","cast_ceremonial_form":"0 [@{form_i18n}]","cast_ceremonial_focus":0,"cast_ceremonial_deficiency":0,"cast_ceremonial_sta":"@{Stamina_Score}","cast_ceremonial_aura":"@{aura}","cast_artes_lib":"0","cast_philos":"0","cast_ceremonial_total_bonus":"0","cast_non-fatiguing_no_dice_score":"(@{cast_non-fatiguing_technique}) + (@{cast_non-fatiguing_form}) + ([[@{cast_non-fatiguing_focus}]]) + (@{Stamina_Score}) + (@{gestures}) + (@{words}) + (@{aura}) + (@{fatigue_penalty}) + (@{wound_penalty}) + (-@{encumbrance})","cast_non-fatiguing_no_dice_divider":"(5) * ([[1 + (@{cast_non-fatiguing_deficiency})]])","cast_non-fatiguing_no_dice_total_bonus":"(@{cast_non-fatiguing_total_bonus})","cast_non-fatiguing_technique":"0 [@{technique_i18n}]","cast_non-fatiguing_form":"0 [@{form_i18n}]","cast_non-fatiguing_focus":0,"cast_non-fatiguing_deficiency":0,"cast_non-fatiguing_sta":"@{Stamina_Score}","cast_non-fatiguing_aura":"@{aura}","cast_non-fatiguing_total_bonus":"0","cast_non-fatiguing-ceremonial_no_dice_score":"(@{cast_non-fatiguing-ceremonial_technique}) + (@{cast_non-fatiguing-ceremonial_form}) + ([[@{cast_non-fatiguing-ceremonial_focus}]]) + (@{Stamina_Score}) + (@{cast_artes_lib}) + (@{cast_philos}) + (@{gestures}) + (@{words}) + (@{aura}) + (@{fatigue_penalty}) + (@{wound_penalty}) + (-@{encumbrance})","cast_non-fatiguing-ceremonial_no_dice_divider":"(5) * ([[1 + (@{cast_non-fatiguing-ceremonial_deficiency})]])","cast_non-fatiguing-ceremonial_no_dice_total_bonus":"(@{cast_non-fatiguing-ceremonial_total_bonus})","cast_non-fatiguing-ceremonial_technique":"0 [@{technique_i18n}]","cast_non-fatiguing-ceremonial_form":"0 [@{form_i18n}]","cast_non-fatiguing-ceremonial_focus":0,"cast_non-fatiguing-ceremonial_deficiency":0,"cast_non-fatiguing-ceremonial_sta":"@{Stamina_Score}","cast_non-fatiguing-ceremonial_aura":"@{aura}","cast_non-fatiguing-ceremonial_total_bonus":"0","cast_formulaic_simple_score":"(@{cast_formulaic_technique}) + (@{cast_formulaic_form}) + ([[@{cast_formulaic_focus}]]) + (@{Stamina_Score}) + (@{gestures}) + (@{words}) + (@{aura}) + (@{fatigue_penalty}) + (@{wound_penalty}) + (-@{encumbrance})","cast_formulaic_simple_divider":"([[1 + (@{cast_formulaic_deficiency})]])","cast_formulaic_stress_score":"(@{cast_formulaic_technique}) + (@{cast_formulaic_form}) + ([[@{cast_formulaic_focus}]]) + (@{Stamina_Score}) + (@{gestures}) + (@{words}) + (@{aura}) + (@{fatigue_penalty}) + (@{wound_penalty}) + (-@{encumbrance})","cast_formulaic_stress_divider":"([[1 + (@{cast_formulaic_deficiency})]])","cast_formulaic_technique":"0 [@{technique_i18n}]","cast_formulaic_form":"0 [@{form_i18n}]","cast_formulaic_focus":0,"cast_formulaic_deficiency":0,"cast_formulaic_sta":"@{Stamina_Score}","cast_formulaic_aura":"@{aura}","cast_ritual_simple_score":"(@{cast_ritual_technique}) + (@{cast_ritual_form}) + ([[@{cast_ritual_focus}]]) + (@{Stamina_Score}) + (@{cast_artes_lib}) + (@{cast_philos}) + (@{gestures}) + (@{words}) + (@{aura}) + (@{fatigue_penalty}) + (@{wound_penalty}) + (-@{encumbrance})","cast_ritual_simple_divider":"([[1 + (@{cast_ritual_deficiency})]])","cast_ritual_stress_score":"(@{cast_ritual_technique}) + (@{cast_ritual_form}) + ([[@{cast_ritual_focus}]]) + (@{Stamina_Score}) + (@{cast_artes_lib}) + (@{cast_philos}) + (@{gestures}) + (@{words}) + (@{aura}) + (@{fatigue_penalty}) + (@{wound_penalty}) + (-@{encumbrance})","cast_ritual_stress_divider":"([[1 + (@{cast_ritual_deficiency})]])","cast_ritual_technique":"0 [@{technique_i18n}]","cast_ritual_form":"0 [@{form_i18n}]","cast_ritual_focus":0,"cast_ritual_deficiency":0,"cast_ritual_sta":"@{Stamina_Score}","cast_ritual_aura":"@{aura}","aura":"3","gestures":"0 [@{gestures_i18n}: @{bold_i18n}]","words":"0 [@{words_i18n}: @{firm_i18n}]","LabSize_Score":"0","LabRefinement_Score":"0","LabGeneralQuality_Score":"0","LabUpkeep_Score":"0","LabSafety_Score":"0","LabWarping_Score":"0","LabHealth_Score":"0","LabAesthetics_Score":"0","SanctumMarker":"","LabDescription":"","Lab":"(@{Intelligence_Score}) + (@{Lab_Theory}) + (@{aura}) + (@{lab_Technique}) + (@{lab_Form}) + (@{Lab_Focus}) + (@{LabModifiers}) + (@{labbonus_total}) + (@{LabGeneralQuality_Score})","Lab_Focus":0,"LabModifiers":"0","Lab_Int":"(@{Intelligence_Score})","Lab_Theory":"0","Lab_Aura":"@{aura}","lab_Technique":"0","lab_Form":"0","labbonus_total":"0","fatigue_penalty":"0","fatigue_ignored":0,"fatigue_level":"fresh","fatigue_winded__long_term":0,"fatigue_weary__long_term":0,"fatigue_tired__long_term":0,"fatigue_dazed__long_term":0,"fatigue_unconscious__long_term":0,"wound_total":"0","wound_penalty":"0","wound_ignored":0,"Wounds_Light_range":"","Wounds_Light1":0,"Wounds_Light2":0,"Wounds_Light3":0,"Wounds_Light4":0,"Wounds_Light5":0,"Wounds_Medium_range":"","Wounds_Medium1":0,"Wounds_Medium2":0,"Wounds_Medium3":0,"Wounds_Medium4":0,"Wounds_Medium5":0,"Wounds_Heavy_range":"","Wounds_Heavy1":0,"Wounds_Heavy2":0,"Wounds_Heavy3":0,"Wounds_Heavy4":0,"Wounds_Heavy5":0,"Wounds_Incapacitated_range":"","Wounds_Incapacitated":0,"Wounds_Dead_range":"","Wounds_Dead":0,"armors_total_prot":"0","armors_total_prot_detailed":" ","armors_total_load":"0","armors_total_load_detailed":" ","combat-mods_total_init":"0","combat-mods_total_init_detailed":" ","combat-mods_total_atk":"0","combat-mods_total_atk_detailed":" ","combat-mods_total_dfn":"0","combat-mods_total_dfn_detailed":" ","combat-mods_total_dam":"0","combat-mods_total_dam_detailed":" ","combat-mods_total_soak":"0","combat-mods_total_soak_detailed":" ","Soak":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}))","soak_stamina":"(@{Stamina_Score})","soak_bonus":"0","total_load":"0","burden":"0","encumbrance":"0","Soak_Animal":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Animal_Score}) + (@{Animal_Puissant})) / 5))","Soak_Aquam":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Aquam_Score}) + (@{Aquam_Puissant})) / 5))","Soak_Auram":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Auram_Score}) + (@{Auram_Puissant})) / 5))","Soak_Corpus":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Corpus_Score}) + (@{Corpus_Puissant})) / 5))","Soak_Herbam":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Herbam_Score}) + (@{Herbam_Puissant})) / 5))","Soak_Ignem":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Ignem_Score}) + (@{Ignem_Puissant})) / 5))","Soak_Imaginem":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Imaginem_Score}) + (@{Imaginem_Puissant})) / 5))","Soak_Mentem":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Mentem_Score}) + (@{Mentem_Puissant})) / 5))","Soak_Terram":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Terram_Score}) + (@{Terram_Puissant})) / 5))","Soak_Vim":"((@{Stamina_Score}) + (@{armors_total_prot}) + (@{soak_bonus}) + (@{combat-mods_total_soak}) + ceil(((@{Vim_Score}) + (@{Vim_Puissant})) / 5))","weapon_total_load":"0","ability_i18n":"Abiliy","armor_i18n":"Armor","artes_i18n":"Artes Lib.","attack_i18n":"Attack","aura_i18n":"Aura","bold_i18n":"Bold","bonus_i18n":"Bonus","botch_i18n":"Botch","characteristic_i18n":"Characteristic","botch_num_i18n":"Number of botch dice","circumstances_i18n":"Circumstances","circumstantial_i18n":"Circumstancial","critical_i18n":"Critical","damage_i18n":"Damage","defense_i18n":"Defense","deficiency_i18n":"Deficiency","encumbrance_i18n":"Encumbrance","exaggerated_i18n":"Exaggerated","fatigue_i18n":"Fatigue","ignored_i18n":"Ignored","firm_i18n":"Firm","focus_i18n":"Focus","form_i18n":"Form","gestures_i18n":"Gestures","gest-none_i18n":"None","initiative_i18n":"Initiative","loud_i18n":"Loud","modifiers_i18n":"Modifiers","philos_i18n":"Philos.","quiet_i18n":"Quiet","simple-die_i18n":"Simple","soakbns_i18n":"Soak Bonus","spontaneous_i18n":"Spontaneous","stress-die_i18n":"Stress","subtle_i18n":"Subtle","technique_i18n":"Technique","total_i18n":"Total","unselected_i18n":"Unselected","words_i18n":"Words","words-none_i18n":"None","wounds_i18n":"Wounds","intelligence_i18n":"Intelligence","perception_i18n":"Perception","presence_i18n":"Presence","communication_i18n":"Communication","strength_i18n":"Strength","stamina_i18n":"Stamina","dexterity_i18n":"Dexterity","quickness_i18n":"Quickness","ask_short_i18n":"Ask","global_char_short_i18n":"Gbl","intelligence_short_i18n":"Int","perception_short_i18n":"Per","presence_short_i18n":"Prs","communication_short_i18n":"Com","strength_short_i18n":"Str","stamina_short_i18n":"Sta","dexterity_short_i18n":"Dex","quickness_short_i18n":"Qik","creo_i18n":"Creo","intellego_i18n":"Intellego","muto_i18n":"Muto","perdo_i18n":"Perdo","rego_i18n":"Rego","animal_i18n":"Animal","aquam_i18n":"Aquam","auram_i18n":"Auram","corpus_i18n":"Corpus","herbam_i18n":"Herbam","ignem_i18n":"Ignem","imaginem_i18n":"Imaginem","mentem_i18n":"Mentem","terram_i18n":"Terram","vim_i18n":"Vim","Unselected_Score":"0","Unselected_Puissant":"0","ask_Score":"?{@{characteristic_i18n}|@{intelligence_i18n},@{intelligence_Score} [@{intelligence_i18n}]| @{perception_i18n},@{perception_Score} [@{perception_i18n}]| @{presence_i18n},@{presence_Score} [@{presence_i18n}]| @{communication_i18n},@{communication_Score} [@{communication_i18n}]| @{strength_i18n},@{strength_Score} [@{strength_i18n}]| @{stamina_i18n},@{stamina_Score} [@{stamina_i18n}]| @{dexterity_i18n},@{dexterity_Score} [@{dexterity_i18n}]| @{quickness_i18n},@{quickness_Score} [@{quickness_i18n}]}","global_char_Score":"@{sys_at}@{character_name}@{sys_pipe}@{global_Ability_CharacName}_Score@{sys_rbk}","global_char_i18n":"@{sys_at}@{character_name}@{sys_pipe}@{global_Ability_CharacName}_i18n@{sys_rbk}","sys_at":"@{","sys_pipe":"|","sys_rbk":"}"},
  triggers: [],
  translation,
  otherCharacters: {
    // Attribute information of other test characters indexed by character name
  },
  queryResponses:{
    // object defining which value to use for roll queries, indexed by prompt text
  }
};
global.environment = environment;

const on = vi.fn((trigger, func) => {
  environment.triggers.push({ trigger, func });
});
global.on = on;
const getAttrs = vi.fn((query, callback) => {
  let values = {};
  for (const attr of query) {
    if (attr in environment.attributes) values[attr] = environment.attributes[attr];
  }
  if (typeof callback === "function") callback(values);
});
global.getAttrs = getAttrs;
const setAttrs = vi.fn((submit, params, callback) => {
  if (!callback && typeof params === "function") callback = params;
  for (const attr in submit) {
    environment.attributes[attr] = submit[attr];
  }
  if (typeof callback === "function") callback();
});
global.setAttrs = setAttrs;
const getSectionIDs = vi.fn((section, callback) => {
  const ids = [];
  const sectionName = section.indexOf("repeating_") === 0 ? section : `repeating_${section}`;
  const attributes = environment.attributes;
  for (const attr in attributes) {
    if (attr.indexOf(sectionName) === 0) ids.push(attr.split("_")[2]);
  }
  const idMap = [...new Set(ids)];
  if (typeof callback === "function") callback(idMap);
});
global.getSectionIDs = getSectionIDs;
const getSectionIDsSync = vi.fn((section) => {
  const ids = [];
  const sectionName = section.indexOf("repeating_") === 0 ? section : `repeating_${section}`;
  const attributes = environment.attributes;
  for (const attr in attributes) {
    if (attr.indexOf(sectionName) === 0) ids.push(attr.split("_")[2]);
  }
  const idMap = [...new Set(ids)];
  return idMap;
});
global.getSectionIDsSync = getSectionIDsSync;
const removeRepeatingRow = vi.fn((id) => {
  const attributes = environment.attributes;
  for (const attr in attributes) {
    if (attr.indexOf(id) > -1) delete environment.attributes[attr];
  }
});
global.removeRepeatingRow = removeRepeatingRow;
const setSectionOrder = vi.fn((section, order, callback) => {
  const sectionName = section.indexOf('repeating_') === 0 ? section : `repeating_${section}`;
  environment.attributes[`_reporder_${sectionName}`] = Array.isArray(order) ? order.join(',') : order;
  if (typeof callback === 'function') callback();
});
global.setSectionOrder = setSectionOrder;
const getCompendiumPage = vi.fn((request, callback) => {
  const pages = compendiumData;
  if (!pages)
    throw new Error(
      "Tried to use getCompendiumPage, but testing environment does not contain compendiumData."
    );
  if (typeof request === "string") {
    const [category, pageName] = request.split(":");
    const response = {
      Name: pageName,
      Category: category,
      data: {},
    };
    if (pages[request]) response.data = pages[request].data;
    if (typeof callback === "function") callback(response);
  } else if (Array.isArray(request)) {
    const pageArray = [];
    for (const page of request) {
      if (pages[request] && pages[request].Category === category) pageArray.push(pages[pageName]);
    }
    if (typeof callback === "function") callback(pageArray);
  }
});
global.getCompendiumPage = getCompendiumPage;
const generateUUID = vi.fn(() => {
  var a = 0,
    b = [];
  return (function () {
    var c = new Date().getTime() + 0,
      d = c === a;
    a = c;
    for (var e = Array(8), f = 7; 0 <= f; f--)
      (e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64)),
      (c = Math.floor(c / 64));
    c = e.join("");
    if (d) {
      for (f = 11; 0 <= f && 63 === b[f]; f--) b[f] = 0;
      b[f]++;
    } else for (f = 0; 12 > f; f++) b[f] = Math.floor(64 * Math.random());
    for (f = 0; 12 > f; f++)
      c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
    return c.replace(/_/g, "z");
  })();
});
global.generateUUID = generateUUID;
const generateRowID = vi.fn(() => {
  return generateUUID().replace(/_/g, "Z");
});
global.generateRowID = generateRowID;
const simulateEvent = vi.fn((event) => {
  environment.triggers.forEach((trigger) => {
    const splitTriggers = trigger.trigger.split(" ") || [trigger.trigger];
    splitTriggers.forEach((singleTrigger) => {
      if (event === singleTrigger) {
        trigger.func({
          sourceAttribute: "test",
        });
      }
    });
  });
});
global.simulateEvent = simulateEvent;
const getTranslationByKey = vi.fn((key) => environment.translation?.[key] || false);
global.getTranslationByKey = getTranslationByKey;
// Roll Handlingglobal.getTranslationByKey = getTranslationByKey;

const extractRollTemplate = (rollString) => {
  const rollTemplate = rollString.match(/&\{template:(.*?)\}/)?.[1];
  environment.attributes.__rolltemplate = rollTemplate;
};

const cleanRollElements = (value) => {
  const cleanText = value
    .replace(/\{\{|\}}(?=$|\s|\{)/g, "")
    .replace(/=/,'===SPLITHERE===');
  const splitText = cleanText.split("===SPLITHERE===");
  return splitText;
};

const extractRollElements = (rollString) => {
  const rollElements = rollString.match(/\{\{(.*?)\}{2,}(?=$|\s|\{)/g);
  if (!rollElements || rollElements.length < 1) return {}
  return  Object.fromEntries(rollElements.map(cleanRollElements));
};

const getExpression = (element) => element.replace(/(\[\[|\]\])/gi, "");

const getDiceOrHalf = (size) => {
  const diceStack = environment.diceStack;
  if (!diceStack?.[size] || diceStack[size].length < 0) return size / 2;
  return environment.diceStack[size].pop();
};

const getDiceRolls = (expression) => {
  const rolls = expression.match(/([0-9]+)?d([0-9]+)/gi);
  if (!rolls) return [];
  const allRolls = [];
  rolls.forEach((roll) => {
    const [number, size] = roll.split(/d/i);
    for (let i = 1; i <= number; i++) {
      const dice = getDiceOrHalf(size);
      allRolls.push(dice);
    }
  });
  return allRolls;
};

const calculateResult = (startExpression, dice) => {
  let expression = startExpression.replace(/\[.+?\]/g,'')

  const rolls = expression.match(/([0-9]+)?d([0-9]+)/gi);
  if (!rolls) return eval(expression);
  rolls.forEach((roll, index) => {
    const [number, size] = roll.split(/d/i);
    let total = 0;
    for (let i = 1; i <= number; i++) {
      total += +dice.shift();
    }
    expression = expression.replace(/([0-9]+d[0-9]+([+\-*/][0-9]+)?)(.*?)$/gi, "$1");
    const regex = new RegExp(roll, "gi");
    expression = expression.replace(regex, total);
  });

  return eval(expression);
};

const replaceAttributes = (element) => {
  const test = /@\{(.*?)\}/i;
  while (test.test(element)) {
    element = element.replace(/@\{(.*?)\}/gi, (sub, ...args) => {
      const attributeName = args[0];
      const attributeValue = environment.attributes[attributeName];
      const attributeExists = typeof attributeValue !== "undefined";
      const possibleAttributes = Object.keys(environment.attributes);
      if (attributeExists) return attributeValue;
      else
        throw new Error(
          `Roll called ${sub} but no corresponding attribute "${attributeName}" was found. Attributes are: ${possibleAttributes.join(
            ", "
          )}`
        );
    });
  }
  return element;
};

const replaceQueries = (element) => {
  return element.replace(/\?\{(.+?)[|}]([^}]+?\})?/g,(match,p,a) => {
    a = a?.split(/\s*\|\s*/) || [];
    return environment.queryResponses[p] || a[0] || '';
  });
};

const calculateRollResult = (rollElements) => {
  const results = {};
  for (const key in rollElements) {
    const element = rollElements[key];
    if (element.indexOf("[[") === -1) continue;
    const attributeFilled = replaceAttributes(element);
    const queryAnswered = replaceQueries(attributeFilled);
    const expression = getExpression(queryAnswered);
    const dice = getDiceRolls(expression);
    const result = calculateResult(expression, [...dice]);
    results[key] = {
      result,
      dice,
      expression,
    };
  }
  return results;
};

const startRoll = vi.fn(async (rollString) => {
  if (!rollString) throw new Error("startRoll expected a Roll String but none was provided.");
  const rollResult = { results: {} };
  extractRollTemplate(rollString);
  const rollElements = extractRollElements(rollString);
  rollResult.results = calculateRollResult(rollElements);
  rollResult.rollId = generateUUID();
  return rollResult;
});
global.startRoll = startRoll;
const finishRoll = vi.fn(() => {});
global.finishRoll = finishRoll;
const k = (function(){
  const kFuncs = {};
  
  const cascades = {"attr_character_name":{"name":"character_name","type":"text","defaultValue":"","affects":[],"triggeredFuncs":["setActionCalls"],"listenerFunc":"accessSheet","listener":"change:character_name"},"act_k-network-call":{"name":"k-network-call","type":"action","triggeredFuncs":["kReceive"],"affects":[],"addFuncs":[],"listener":"clicked:k-network-call","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_notNew":{"name":"notNew","type":"number","affects":[],"triggeredFuncs":[]},"attr_alert-161-spell-update":{"name":"alert-161-spell-update","type":"number","affects":[],"triggeredFuncs":[]},"attr_repeating_spell_$X_Technique_select":{"name":"repeating_spell_$X_Technique_select","type":"number","affects":[],"triggeredFuncs":[]},"attr_repeating_spell_$X_Form_select":{"name":"repeating_spell_$X_Form_select","type":"number","affects":[],"triggeredFuncs":[]},"attr_repeating_spell_$X_spell_tech_name":{"name":"repeating_spell_$X_spell_tech_name","type":"string","affects":[],"triggeredFuncs":[]},"attr_repeating_spell_$X_spell_form_name":{"name":"repeating_spell_$X_spell_form_name","type":"string","affects":[],"triggeredFuncs":[]},"attr_repeating_weapons_$X_Wounds_Load":{"name":"repeating_weapons_$X_Wounds_Load","type":"number","affects":[],"triggeredFuncs":[]},"attr_repeating_weapons_$X_Wounds_Range":{"name":"repeating_weapons_$X_Wounds_Range","type":"string","affects":[],"triggeredFuncs":[]},"attr_repeating_weapons_$X_Weapon_Load":{"name":"repeating_weapons_$X_Weapon_Load","type":"number","affects":[],"triggeredFuncs":[]},"attr_repeating_weapons_$X_Weapon_Range":{"name":"repeating_weapons_$X_Weapon_Range","type":"string","affects":[],"triggeredFuncs":[]},"attr_update_error_rowid":{"name":"update_error_rowid","type":"hidden","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:update_error_rowid","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_repeating_alerts--global-alerts_$x_level":{"name":"repeating_alerts--global-alerts_$x_level","type":"hidden","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:repeating_alerts--global-alerts:level","listenerFunc":"accessSheet","defaultValue":"info","calculation":"","initialFunc":"","formula":""},"attr_repeating_alerts--global-alerts_$x_title":{"name":"repeating_alerts--global-alerts_$x_title","type":"span","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:repeating_alerts--global-alerts:title","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_repeating_alerts--global-alerts_$x_text":{"name":"repeating_alerts--global-alerts_$x_text","type":"span","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:repeating_alerts--global-alerts:text","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"act_repeating_alerts--global-alerts_$x_close":{"name":"repeating_alerts--global-alerts_$x_close","type":"action","triggeredFuncs":["onAlertRemoved"],"affects":[],"addFuncs":[],"listener":"clicked:repeating_alerts--global-alerts:close","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_kmodal-settings":{"name":"kmodal-settings","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:kmodal-settings","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_botch_formula":{"name":"botch_formula","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:botch_formula","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_die-type-selection":{"name":"die-type-selection","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:die-type-selection","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_ismagi":{"name":"ismagi","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:ismagi","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_kmodal-help":{"name":"kmodal-help","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:kmodal-help","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_kmodal-history":{"name":"kmodal-history","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:kmodal-history","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_strength_score":{"name":"strength_score","type":"number","triggeredFuncs":[],"affects":["encumbrance"],"addFuncs":[],"listener":"change:strength_score","listenerFunc":"accessSheet","defaultValue":"0","calculation":"","initialFunc":"","formula":""},"attr_cast_spontaneous_technique":{"name":"cast_spontaneous_technique","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_spontaneous_technique","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_spontaneous_form":{"name":"cast_spontaneous_form","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_spontaneous_form","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_spontaneous_focus":{"name":"cast_spontaneous_focus","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_spontaneous_focus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_spontaneous_deficiency":{"name":"cast_spontaneous_deficiency","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_spontaneous_deficiency","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_spontaneous_sta":{"name":"cast_spontaneous_sta","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_spontaneous_sta","listenerFunc":"accessSheet","defaultValue":"@{Stamina_Score}","calculation":"","initialFunc":"","formula":""},"attr_cast_spontaneous_aura":{"name":"cast_spontaneous_aura","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_spontaneous_aura","listenerFunc":"accessSheet","defaultValue":"@{aura}","calculation":"","initialFunc":"","formula":""},"attr_cast_spontaneous_total_bonus":{"name":"cast_spontaneous_total_bonus","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_spontaneous_total_bonus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_ceremonial_technique":{"name":"cast_ceremonial_technique","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ceremonial_technique","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_ceremonial_form":{"name":"cast_ceremonial_form","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ceremonial_form","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_ceremonial_focus":{"name":"cast_ceremonial_focus","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ceremonial_focus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_ceremonial_deficiency":{"name":"cast_ceremonial_deficiency","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ceremonial_deficiency","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_ceremonial_sta":{"name":"cast_ceremonial_sta","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ceremonial_sta","listenerFunc":"accessSheet","defaultValue":"@{Stamina_Score}","calculation":"","initialFunc":"","formula":""},"attr_cast_ceremonial_aura":{"name":"cast_ceremonial_aura","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ceremonial_aura","listenerFunc":"accessSheet","defaultValue":"@{aura}","calculation":"","initialFunc":"","formula":""},"attr_cast_artes_lib":{"name":"cast_artes_lib","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_artes_lib","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_philos":{"name":"cast_philos","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_philos","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_ceremonial_total_bonus":{"name":"cast_ceremonial_total_bonus","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ceremonial_total_bonus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing_technique":{"name":"cast_non-fatiguing_technique","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing_technique","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing_form":{"name":"cast_non-fatiguing_form","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing_form","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing_focus":{"name":"cast_non-fatiguing_focus","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing_focus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing_deficiency":{"name":"cast_non-fatiguing_deficiency","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing_deficiency","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing_sta":{"name":"cast_non-fatiguing_sta","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing_sta","listenerFunc":"accessSheet","defaultValue":"@{Stamina_Score}","calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing_aura":{"name":"cast_non-fatiguing_aura","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing_aura","listenerFunc":"accessSheet","defaultValue":"@{aura}","calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing_total_bonus":{"name":"cast_non-fatiguing_total_bonus","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing_total_bonus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing-ceremonial_technique":{"name":"cast_non-fatiguing-ceremonial_technique","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing-ceremonial_technique","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing-ceremonial_form":{"name":"cast_non-fatiguing-ceremonial_form","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing-ceremonial_form","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing-ceremonial_focus":{"name":"cast_non-fatiguing-ceremonial_focus","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing-ceremonial_focus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing-ceremonial_deficiency":{"name":"cast_non-fatiguing-ceremonial_deficiency","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing-ceremonial_deficiency","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing-ceremonial_sta":{"name":"cast_non-fatiguing-ceremonial_sta","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing-ceremonial_sta","listenerFunc":"accessSheet","defaultValue":"@{Stamina_Score}","calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing-ceremonial_aura":{"name":"cast_non-fatiguing-ceremonial_aura","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing-ceremonial_aura","listenerFunc":"accessSheet","defaultValue":"@{aura}","calculation":"","initialFunc":"","formula":""},"attr_cast_non-fatiguing-ceremonial_total_bonus":{"name":"cast_non-fatiguing-ceremonial_total_bonus","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_non-fatiguing-ceremonial_total_bonus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_formulaic_technique":{"name":"cast_formulaic_technique","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_formulaic_technique","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_formulaic_form":{"name":"cast_formulaic_form","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_formulaic_form","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_formulaic_focus":{"name":"cast_formulaic_focus","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_formulaic_focus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_formulaic_deficiency":{"name":"cast_formulaic_deficiency","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_formulaic_deficiency","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_formulaic_sta":{"name":"cast_formulaic_sta","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_formulaic_sta","listenerFunc":"accessSheet","defaultValue":"@{Stamina_Score}","calculation":"","initialFunc":"","formula":""},"attr_cast_formulaic_aura":{"name":"cast_formulaic_aura","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_formulaic_aura","listenerFunc":"accessSheet","defaultValue":"@{aura}","calculation":"","initialFunc":"","formula":""},"attr_cast_ritual_technique":{"name":"cast_ritual_technique","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ritual_technique","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_ritual_form":{"name":"cast_ritual_form","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ritual_form","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_cast_ritual_focus":{"name":"cast_ritual_focus","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ritual_focus","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_ritual_deficiency":{"name":"cast_ritual_deficiency","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ritual_deficiency","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_cast_ritual_sta":{"name":"cast_ritual_sta","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ritual_sta","listenerFunc":"accessSheet","defaultValue":"@{Stamina_Score}","calculation":"","initialFunc":"","formula":""},"attr_cast_ritual_aura":{"name":"cast_ritual_aura","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:cast_ritual_aura","listenerFunc":"accessSheet","defaultValue":"@{aura}","calculation":"","initialFunc":"","formula":""},"attr_aura":{"name":"aura","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:aura","listenerFunc":"accessSheet","defaultValue":3,"calculation":"","initialFunc":"","formula":""},"attr_gestures":{"name":"gestures","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:gestures","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_words":{"name":"words","type":"select","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:words","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_fatigue_penalty":{"name":"fatigue_penalty","type":"hidden","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:fatigue_penalty","listenerFunc":"accessSheet","defaultValue":0,"calculation":"calc_fatigue_penalty","initialFunc":"","formula":""},"attr_fatigue_ignored":{"name":"fatigue_ignored","type":"checkbox","triggeredFuncs":[],"affects":["fatigue_penalty"],"addFuncs":[],"listener":"change:fatigue_ignored","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_fatigue_level":{"name":"fatigue_level","type":"radio","triggeredFuncs":[],"affects":["fatigue_penalty"],"addFuncs":[],"listener":"change:fatigue_level","listenerFunc":"accessSheet","defaultValue":"fresh","calculation":"","initialFunc":"","formula":""},"attr_wound_total":{"name":"wound_total","type":"hidden","triggeredFuncs":[],"affects":["wound_penalty"],"addFuncs":[],"listener":"change:wound_total","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_wound_penalty":{"name":"wound_penalty","type":"hidden","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:wound_penalty","listenerFunc":"accessSheet","defaultValue":0,"calculation":"calc_wound_penalty","initialFunc":"","formula":""},"attr_wound_ignored":{"name":"wound_ignored","type":"checkbox","triggeredFuncs":[],"affects":["wound_penalty"],"addFuncs":[],"listener":"change:wound_ignored","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_armors_total_prot":{"name":"armors_total_prot","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:armors_total_prot","listenerFunc":"accessSheet","defaultValue":0,"calculation":"section_conditional_sum","initialFunc":"","formula":"","sum_section":"repeating_armors","sum_condition":"isactive","sum_value":"armors_prot"},"attr_armors_total_prot_detailed":{"name":"armors_total_prot_detailed","type":"hidden","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:armors_total_prot_detailed","listenerFunc":"accessSheet","defaultValue":" ","calculation":"section_conditional_sum_detail","initialFunc":"","formula":"","sum_section":"repeating_armors","sum_condition":"isactive","sum_value":"armors_prot","sum_label":"armors_name"},"attr_armors_total_load":{"name":"armors_total_load","type":"number","triggeredFuncs":[],"affects":["total_load"],"addFuncs":[],"listener":"change:armors_total_load","listenerFunc":"accessSheet","defaultValue":0,"calculation":"section_conditional_sum","initialFunc":"","formula":"","sum_section":"repeating_armors","sum_condition":"isactive","sum_value":"armors_load"},"attr_armors_total_load_detailed":{"name":"armors_total_load_detailed","type":"hidden","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:armors_total_load_detailed","listenerFunc":"accessSheet","defaultValue":" ","calculation":"section_conditional_sum_detail","initialFunc":"","formula":"","sum_section":"repeating_armors","sum_condition":"isactive","sum_value":"armors_load","sum_label":"armors_name"},"attr_repeating_armors_$x_armors_name":{"name":"repeating_armors_$x_armors_name","type":"text","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:repeating_armors:armors_name","listenerFunc":"accessSheet","defaultValue":"","calculation":"","initialFunc":"","formula":""},"attr_repeating_armors_$x_armors_prot":{"name":"repeating_armors_$x_armors_prot","type":"number","triggeredFuncs":[],"affects":["armors_total_prot","armors_total_prot_detailed"],"addFuncs":[],"listener":"change:repeating_armors:armors_prot","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_repeating_armors_$x_armors_load":{"name":"repeating_armors_$x_armors_load","type":"number","triggeredFuncs":[],"affects":["armors_total_load","armors_total_load_detailed"],"addFuncs":[],"listener":"change:repeating_armors:armors_load","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_repeating_armors_$x_isactive":{"name":"repeating_armors_$x_isactive","type":"checkbox","triggeredFuncs":[],"affects":["armors_total_prot","armors_total_prot_detailed","armors_total_load","armors_total_load_detailed"],"addFuncs":[],"listener":"change:repeating_armors:isactive","listenerFunc":"accessSheet","defaultValue":1,"calculation":"","initialFunc":"","formula":""},"attr_total_load":{"name":"total_load","type":"number","triggeredFuncs":[],"affects":["burden"],"addFuncs":[],"listener":"change:total_load","listenerFunc":"accessSheet","defaultValue":0,"calculation":"calc_total_load","initialFunc":"","formula":""},"attr_burden":{"name":"burden","type":"number","triggeredFuncs":[],"affects":["encumbrance"],"addFuncs":[],"listener":"change:burden","listenerFunc":"accessSheet","defaultValue":0,"calculation":"calc_burden","initialFunc":"","formula":""},"attr_encumbrance":{"name":"encumbrance","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:encumbrance","listenerFunc":"accessSheet","defaultValue":0,"calculation":"calc_encumbrance","initialFunc":"","formula":""},"attr_weapon_total_load":{"name":"weapon_total_load","type":"hidden","triggeredFuncs":[],"affects":["total_load"],"addFuncs":[],"listener":"change:weapon_total_load","listenerFunc":"accessSheet","defaultValue":0,"calculation":"","initialFunc":"","formula":""},"attr_repeating_weapons_$x_is_active":{"name":"repeating_weapons_$x_is_active","type":"checkbox","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:repeating_weapons:is_active","listenerFunc":"accessSheet","defaultValue":1,"calculation":"","initialFunc":"","formula":""},"attr_repeating_weapons_$x_weapon_load":{"name":"repeating_weapons_$x_weapon_load","type":"number","triggeredFuncs":[],"affects":[],"addFuncs":[],"listener":"change:repeating_weapons:weapon_load","listenerFunc":"accessSheet","defaultValue":"0","calculation":"","initialFunc":"","formula":""}};
  
  kFuncs.cascades = cascades;
  
  const repeatingSectionDetails = [{"section":"repeating_spell","fields":["Technique_select","Form_select","spell_tech_name","spell_form_name"]},{"section":"repeating_weapons","fields":["Wounds_Load","Wounds_Range","Weapon_Load","Weapon_Range","is_active"]},{"section":"repeating_alerts--global-alerts","fields":["level","title","text"]},{"section":"repeating_armors","fields":["armors_name","armors_prot","armors_load","isactive"]}];
  
  kFuncs.repeatingSectionDetails = repeatingSectionDetails;
  
  const persistentTabs = [];
  
  kFuncs.persistentTabs = persistentTabs;
  /**
 * The K-scaffold provides several variables to allow your scripts to tap into its information flow.
 * @namespace Sheetworkers.Variables
 */
/**
 * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`
 * @memberof Variables
 * @var
 * @type {string}
 */
let sheetName = 'kScaffold Powered Sheet';
kFuncs.sheetName = sheetName;
/**
	* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`
 * @memberof Variables
	* @var
	* @type {number}
	*/
let version = 0;
kFuncs.version = version;
/**
	* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.
 * @memberof Variables
	* @var
	* @type {boolean}
	*/
let debugMode = false;
kFuncs.debugMode = debugMode;
/**
	* A boolean flag that tells the script whether to output verbose logs of what is being done or not when {@link debugMode} is enabled.
 * @memberof Variables
	* @var
	* @type {boolean}
	*/
let verboseMode = false;
kFuncs.verboseMode = verboseMode;
const funcs = {};
kFuncs.funcs = funcs;
const updateHandlers = {};
const openHandlers = {};
const initialSetups = {};
const allHandlers = {};
const addFuncs = {};

const kscaffoldJSVersion = '2.7.2';
const kscaffoldPUGVersion = '2.7.0';
/**
 * Defines the rollstring that rolls made using k.startRoll begin with. Defaults to "&{template:default}".
 * @memberof Variables
 * @var
 * @type {string}
 */
let defaultRollStart = '&{template:default}';
kFuncs.defaultRollStart = defaultRollStart;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.
 * @namespace Sheetworkers.Utilities
 * @alias Utilities
 */
/**
 * Replaces problem characters to use a string as a regex
 * @memberof Utilities
 * @param {string} text - The text to replace characters in
 * @returns {string}
 * @example
 * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
 * console.log(textForRegex);// => "\.some thing\[with characters\]"
 */
const sanitizeForRegex = function(text){
  return text.replace(/\.|\||\(|\)|\[|\]|\-|\+|\?|\/|\{|\}|\^|\$|\*/g,'\\$&');
};
kFuncs.sanitizeForRegex = sanitizeForRegex;

/**
 * Converts a value to a number, it\'s default value, or `0` if no default value passed.
 * @memberof Utilities
 * @param {string|number} val - Value to convert to a number
 * @param {number} def - The default value, uses 0 if not passed
 * @returns {number|undefined}
 * @example
 * const num = k.value('100');
 * console.log(num);// => 100
 */
const value = function(val,def){
  const convertVal = +val;
  if(def !== undefined && isNaN(def)){
    throw(`K-scaffold Error: invalid default for value(). Default: ${def}`);
  }
  return convertVal === 0 ?
    convertVal :
    (+val||def||0);
};
kFuncs.value = value;

/**
 * Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.
 * @memberof Utilities
 * @param {string} string - The string to parse
 * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute
 * @returns {string[]}
 * @example
 * //Extract info from a full repeating name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => "name"
 * 
 * //Extract info from just a row name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => undefined
 */
const parseRepeatName = function(string){
  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);
  match.shift();
  return match;
};
kFuncs.parseRepeatName = parseRepeatName;

/**
 * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.
 * 
 * Aliases: `k.parseClickTrigger`
 * @memberof Utilities
 * @param {string} string The triggerName property of the
 * @returns {array} - For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`
 * @returns {string[]}
 * @example
 * //Parse a non repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
 * console.log(section);// => undefined
 * console.log(rowID);// => undefined
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating name
 * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 */
const parseTriggerName = function(string){
  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);
  match.shift();
  return match;
};
kFuncs.parseTriggerName = parseTriggerName;
const parseClickTrigger = parseTriggerName;
kFuncs.parseClickTrigger = parseClickTrigger;

/**
 * Parses out the attribute name from the htmlattribute name.
 * @memberof Utilities
 * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).
 * @returns {string}
 * @example
 * //Parse a name
 * const attrName = k.parseHtmlName('attr_attribute_1');
 * console.log(attrName);// => "attribute_1"
 */
const parseHTMLName = function(string){
  let match = string.match(/(?:attr|act|roll)_(.+)/);
  match.shift();
  return match[0];
};
kFuncs.parseHTMLName = parseHTMLName;

/**
 * Capitalize each word in a string
 * @memberof Utilities
 * @param {string} string - The string to capitalize
 * @returns {string}
 * @example
 * const capitalized = k.capitalize('a word');
 * console.log(capitalized);// => "A Word"
 */
const capitalize = function(string){
  return string.replace(/(?:^|\s+|\/)[a-z]/ig,(letter)=>letter.toUpperCase());
};
kFuncs.capitalize = capitalize;

/**
 * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).
 * @memberof Utilities
 * @param {string} query - The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.
 * @returns {Promise} - Resolves to the selected value from the roll query
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 *  console.log(queryResult);//=> "Option 1" or "Option 2" depending on what the user selects
 * 
 *  //Get free form input from the user
 *  const freeResult = await extractQueryResult('Prompt Text Here');
 *  consoel.log(freeResult);// => Whatever the user entered
 * }
 */
const extractQueryResult = async function(query){
  const rollObj = {
    query:`[[0[response=?{${query}}]]]`
  };
	let {roll} = await _startRoll(rollObj,'!');
  roll.finish();
	return roll.results.query.expression.replace(/^.+?response=|\]$/g,'');
};
kFuncs.extractQueryResult = extractQueryResult;

/**
 * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.
 * @memberof Utilities
 * @param {string|number} [value] - The value to return. Optional.
 * @returns {Promise} - Resolves to the value passed to the function
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await pseudoQuery('a value');
 *  console.log(queryResult);//=> "a value"
 * }
 */
const pseudoQuery = async function(value){  
  const rollObj = {
    query:`[[0[response=${value}]]]`
  };
	let {roll} = await _startRoll(rollObj,'!');
  roll.finish();
	return roll.results.query.expression.replace(/^.+?response=|\]$/g,'');
};
kFuncs.pseudoQuery = pseudoQuery;

/**
 * An alias for console.log.
 * @memberof Utilities
 * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.
 */
const log = function(msg){
  if(typeof msg === 'string'){
    console.log(`%c${kFuncs.sheetName} log| ${msg}`,"background-color:#159ccf");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>{
      if(typeof msg[m] === 'string'){
        console.log(`%c${kFuncs.sheetName} log| ${m}: ${msg[m]}`,"background-color:#159ccf");
      }else{
        console.log(`%c${kFuncs.sheetName} log| ${typeof msg[m]} ${m}`,"background-color:#159ccf");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.log = log;

/**
 * Alias for console.log that only triggers when debug mode is enabled or when the sheet\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.
 * @memberof Utilities
 * @param {any} msg - 'See {@link k.log}
 * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.
 * @returns {void}
 */
const debug = function(msg,force){
  if(!kFuncs.debugMode && !force && kFuncs.version > 0) return;
  if(typeof msg === 'string'){
    console.warn(`%c${kFuncs.sheetName} DEBUG| ${msg}`,"background-color:tan;color:red;");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>{
      if(typeof msg[m] === 'string'){
        console.warn(`%c${kFuncs.sheetName} DEBUG| ${m}: ${msg[m]}`,"background-color:tan;color:red;");
      }else{
        console.warn(`%c${kFuncs.sheetName} DEBUG| ${typeof msg[m]} ${m}`,"background-color:tan;color:red;font-weight:bold;");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.debug = debug;

/**
 * Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.
 * @memberof Utilities
 * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.
 * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.
 */
const orderSections = function(attributes,sections,casc){
  Object.keys(sections).forEach((section)=>{
    attributes.attributes[`_reporder_${section}`] = commaArray(attributes[`_reporder_${section}`]);
    sections[section] = orderSection(attributes.attributes[`_reporder_${section}`],sections[section],attributes,section,casc);
  });
};
kFuncs.orderSections = orderSections;

/**
 * Orders a single ID array.
 * @memberof Utilities
 * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.
 * @param {string[]} IDs - Array of IDs to be ordered. Aka the default ID Array passed to the getSectionIDs callback
 * @param {AttributesProxy} [attributes] - The Kscaffold attributes object
 * @param {string} [section] - the name of the section being ordered. If section and attributes are passed, will return an ordered array that does not include IDs for rows that do not exist.
 * @param {object} [casc] - the object describing the default state of the sheet.
 * @returns {string[]} - The ordered id array
 */
const orderSection = function(repOrder,IDs=[], attributes, section,casc){
  const idArr = [...repOrder.filter(v => v),...IDs.filter(id => !repOrder.includes(id.toLowerCase()))]
    .filter(id => {
      const testAttr = Object.keys(casc).find(a => a.toLowerCase().startsWith(`attr_${section}_${id}`));
      const testName = testAttr?.replace(/attr_/,'');
      const idName = testName?.replace(/\$x/,id);
      return (!section && !casc) ||
        (
          idName && 
          (
            attributes.attributes.hasOwnProperty(idName) ||
            attributes.updates.hasOwnProperty(idName)
          )
        );
    });
  return idArr;
};
kFuncs.orderSection = orderSection;

/**
 * Splits a comma delimited string into an array
 * @memberof Utilities
 * @param {string} string - The string to split.
 * @returns {array} - The string segments of the comma delimited list.
 */
const commaArray = function(string=''){
  return string.toLowerCase().split(/\s*,\s*/);
};
kFuncs.commaArray = commaArray;

// Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.
const RE = {
  chars: {
      '"': '%quot;',
      ',': '%comma;',
      ':': '%colon;',
      '}': '%rcub;',
      '{': '%lcub;',
  },
  escape(data) {
    return typeof data === 'object' ?
      `KDATA${btoa(JSON.stringify(data))}` :
      `KSTRING${btoa(data)}`;
  },
  unescape(string) {
    const isData = typeof string === 'string' &&
      (
        string.startsWith('KDATA') ||
        string.startsWith('KSTRING')
      );
    return isData ?
      (
        string.startsWith('KDATA') ?
          JSON.parse(atob(string.replace(/^KDATA/,''))) :
          atob(string.replace(/^KSTRING/,''))
      ) :
      string;
  }
};


/**
 * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.
 * @function
 * @param {string|object|any[]} data - The data that you want to Base64 encode
 * @returns {string} - The encoded data
 * @memberof! Utilities
 */
const escape = RE.escape;
/**
 * Decodes Base64 encoded strings that were created by the K-scaffold
 * @function
 * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.
 * @returns {string|object|any[]}
 * @memberof! Utilities
 */
const unescape = RE.unescape;

Object.assign(kFuncs,{escape,unescape});

/**
 * Parses a macro so that it is reduced to the final values of all attributes contained in the macro. Will drill down up to 99 levels deep. If the string was not parseable, string will be returned with as much parsed as possible.
 * @memberof Utilities
 * @param {string} mutStr - The string macro to parse
 * @param {AttributesProxy} attributes - The K-scaffold Attributes Proxy
 * @param {Object} sections - The K-scaffold sections object
 * @returns {string} - The string with all attributes replaced by their values (if possible).
 */
const parseMacro = (str,attributes,sections) => {
  let iter = 0;
  let mutStr = str;
  while(mutStr.match(/@{.+?}/) && iter < 99){
    mutStr = mutStr.replace(/@{(.+?)}/g,(match,name) => {
      name = name.replace(/\|/,'_');
      return attributes[name] !== null && attributes[name] !== undefined ?
        attributes[name] :
        `@(${name})`;
    })
    iter++;
  }
  mutStr = mutStr.replace(/@\((.+?)\)/g,'@{$1}');
  return mutStr;
}
kFuncs.parseMacro = parseMacro;

/**
 * Sends data to another character sheet to cause a change on that sheet. WARNING, this function should not be used in response to an attribute change to avoid spamming the chat with api messages.
 * 
 * ![k.send.gif](/k-scaffold/k.send.gif)
 * @memberof Utilities
 * @param {string} characterName - The character to connect to
 * @param {string} funcName - Name of the function to call similar to function name used in {@link callFunc}.
 * @param  {...any} args - The arguments to pass to the function call no the other sheet. These are passed after the normal destructure object for a K-scaffold function call.
 * @example
 * //Function that is called by the source sheet
 * const dispatchPartner = async function({trigger,attributes,sections,casc}){
 *  const partnerName = await (
 *    attributes.partner_name ?
 *      k.pseudoQuery(attributes.partner_name) :
 *      k.extractQueryResult('Partner name')
 *  );
 *  attributes.partner_name = partnerName;
 *  //passing the attributes of the source sheet
 *  k.send(partnerName,'receivePartner',attributes);
 *  attributes.set();
 * };
 * k.registerFuncs({dispatchPartner});
 * 
 * //Function called on target sheet. Partner is the attributes from the source sheet
 * const receivePartner  = function({trigger,attributes,sections,casc},partner){
 *   attributes.from_partner = partner.for_partner;
 *   attributes.partner_name = partner.character_name;
 * };
 * k.registerFuncs({receivePartner });
 */
const send = async function(characterName,funcName,...args){
  const data = RE.escape({
    funcName,
    args
  });
  const roll = await startRoll(`!@{${characterName}|character_name}%{${characterName}|k-network-call||${data}}&{noerror}`);
  finishRoll(roll.rollId);
};
kFuncs.send = send;

const kReceive = function({trigger,attributes,sections,casc}) {
  const data = trigger.rollData;
  callFunc(data.funcName,{attributes,sections,casc},...data.args);
};
funcs.kReceive = kReceive;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * Detailed descriptions of the arguments that are passed to functions registered with the K-scaffold.
 * @namespace Sheetworkers.Function Arguments
 */
/**
 * An object that stores the rowID information for each repeating section on the sheet.
 * @name sections
 * @memberof Function Arguments
 * @var
 * @property {string[]} repeating_section_name - The row IDs of a given repeating section. The repeating section name is used **with** the `repeating_` prefix (e.g. `sections['repeating_weapons']`).
 */
/**
 * Object that stores the default trigger information for all attributes. Indexed by attribute, button name, or fieldset name prefixed with `attr_`, `act_`, or `fieldset_` respectively.
 * @name casc
 * @memberof Function Arguments
 * @var
 */
/**
 * Object describing the attribute that is currently being worked on. In addition to the properties described here, the properties from the Roll20 event will also be present if the attribute was the original event. Additional properties may be present if you specified them when creating the input for the attribute.
 * @name trigger
 * @memberof Function Arguments
 * @var
 * @property {string} name - The full name of the attribute.
 * @property {string[]} triggeredFuncs - Array of function names that will be called when this attribute is worked on.
 * @property {string} calculation - The name of the function that is used to calculate the value of this attribute.
 * @property {string} formula - The macro syntax formula to use to calculate this attributes value.
 * @property {string[]} affects - Array of attribute names that this attribute might affect.
 * @property {string[]} addFuncs - Functions that are called when the add row button is clicked for a customControlFieldset.
 * @property {string} listener - What function was used to listen for changes to this attribute. Unless you have decided to implement your own event handling, this should always be `"accessSheet"`.
 * @property {string} type - What type of thing this trigger is for (e.g. number, action).
 */
//# Attribute Obj Proxy handler
/**
	* A representation of the sheet's attributes. This is a proxy for the actual object and will keep track of original values and updates that have been applied. Calling an attribute directly on the attributes value will return it's current value coerced into a number if it is numeric. Setting a property on the attributes object will add it the list of updates which will be applied the next time the `set()` method is called on attributes.
  * @name attributes
  * @memberof Function Arguments
  * @var
  * @property {object} attributes - The raw original data of the character sheet.
  * @property {object} updates - The raw data that will be saved to the character sheet once all operations have been completed.
  * @property {function} set - Method to apply changes to the character sheet. This is called automatically at the end of the scaffold's event handling. Needs to be called manually if inside an asynchronous function, such as when using the startRoll sheetworker (or any of the scaffold aliases for startRoll). The method uses object destructuring syntax for the arguments it takes.
  * @property {boolean} [set.vocal=false] - Whether the set is done silently or not. Should almost always be left at false. `attributes.set({vocal:true})`
  * @property {function} [set.callback] - Callback function to be invoked once the setAttrs is complete. `attributes.set({callback(){/*do a thing}})`
  * @property {any} attribute_name - Name of any attribute whose data from the character sheet you want to access. Will only return a value if the attribute was defined using the scaffold's pug mixins (e.g. +input). If the value of the attribute is numerical (e.g. `"5"`), it will be returned as a number. You can also apply changes by simply assigning a value to an attribute name (e.g. `attributes.character_name = 'New Character'`).
  * @property {object} repOrders - Object showing the ordered arrays for the _reporder_ attributes for each repeating section. Indexed by repeating section name
  * @property {object[]} repeating_section_name - Name of a repeating section whose data you want to access (e.g. `attributes.repeating_weapons`). The data will be returned as an array with objects describing each row in the order they are on the sheet. Objects are indexed by rowID as well. Mutating array methods are replaced by the `sort` and `move` methods. Non mutating array methods can be used as normal.
  * @property {string} repeating_section_name._section - the name of the repeating section. Used internally by the scaffold. Readonly.
  * @property {function} move - Method for reordering rows.
  * @property {number|string} move.startingPosition - the row id or position index for the row you want to move.
  * @property {number} move.destination - The position in the section where you want the row to be moved to. If the position is greater than the length of the section, the row will be moved to the last position. If the position is negative, it will be moved to the start of the section.
  * @property {boolean} [move.silent=false] - Whether the reordering should trigger setSectionOrder or not.
  * @property {function} sort - Alias for the default Array.sort method. Functions as the default sort method, but has an optional second argument.
  * @property {function} sort.callback - The function to use for determining the sort order. See the [Array.sort documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) for details.
  * @property {boolean} [sort.silent=false] - Whether to apply the sort to the display of the repeating section.
  * @property {function} create - Method for creating a new row in a repeating section. Arguments for this method can be in any order. A row will not actually be created unless data is assigned to at least one attribute of the row, either at creation or later. Returns the object representing the new row.
  * @property {string} [create.custom] - Custom text that replaces the starting characters of the rowID
  * @property {object} [create.data] - what to set the attribute values of the row to. If not provided, the row object will be created, but no row will be created on the sheet until data is specified.
  * @property {object} repeating_section_name.rowID_or_Index - Returns the object describing a row in a repeating section specified by row ID or indexed position. (e.g. `attributes.repeating_weapons[0]` returns the data for the first row in the weapons section)
  * * @property {object} repeating_section_name.rowID_or_Index._id - The id of the row. Readonly.
  * * @property {object} repeating_section_name.rowID_or_Index._section - The repeating section the row belongs to. Readonly.
  * @property {any} repeating_section_name.rowID_or_Index.attribute_name - functions as an attribute_name call on the base attributes object. (e.g. `attributes['repeating_weapons_-jJ2soils_name']` is equivalent to `attributes.repeating_weapons['-jJ2soils'].name`).
  * @type {object}
	*/
  const createAttrProxy = function(attrs,sections,casc){
    //creates a proxy for the attributes object so that values can be worked with more easily.
    const getCascObj = function(event){
      const eventName = event.triggerName || event.sourceAttribute;
      let typePrefix = eventName.startsWith('clicked:') ?
        'act_' :
        event.removedInfo ?
        'fieldset_' :
        'attr_';
      let cascName = `${typePrefix}${eventName.replace(/(?:removed?|clicked):/,'')}`;
      let cascObj = casc[cascName];
      if(kFuncs.verboseMode){
        debug({[cascName]:cascObj});
      }
      if(event && cascObj){
        Object.assign(cascObj,event);
        if(event.originalRollId){
          cascObj.rollData = RE.unescape(event.originalRollId);
        }
      }
      return cascObj || {};
    };
    
    const triggerFunctions = function(obj){
      if(obj.triggeredFuncs && obj.triggeredFuncs.length){
        if(kFuncs.verboseMode){
          debug(`triggering functions for ${obj.name}`);
        }
        obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>funcs[func] ? 
          funcs[func]({trigger:obj,attributes,sections,casc}) :
          debug(`!!!Warning!!! no function named ${func} found. Triggered function not called for ${obj.name}`,true));
      }
    };
    
    const initialFunction = function(obj){
      if(obj.initialFunc){
        if(kFuncs.verboseMode){
          debug(`initial functions for ${obj.name}`);
        }
        funcs[obj.initialFunc] ?
          funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :
          debug(`!!!Warning!!! no function named ${obj.initialFunc} found. Initial function not called for ${obj.name}`,true);
      }
    };
    const alwaysFunctions = function(trigger){
      Object.values(allHandlers).forEach((handler)=>{
        handler({trigger,attributes,sections,casc});
      });
    };
    const processChange = function({event,trigger}){
      if(event && !trigger){
        debug(`${event.sourceAttribute} change detected. No trigger found`);
        return;
      }
      if(!attributes || !sections || !casc){
        debug(`!!! Insufficient arguments || attributes > ${!!attributes} | sections > ${!!sections} | casc > ${!!casc} !!!`);
        return;
      }
      if(kFuncs.verboseMode){
        debug({trigger});
      }
      if(event){
        if(Array.isArray(trigger.affects)){
          attributes.queue.push(...trigger.affects);
        }
        alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.
        initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user
  
      }
      if(trigger){
        triggerFunctions(trigger,attributes,sections,casc);
        if(!event){
          // Handle autocalc formula
          if(trigger.formula){
            attributes[trigger.name] = parseKFormula({trigger,attributes,sections,casc});
          }
          // handle calculation of element
          if(
            trigger.calculation &&
            funcs[trigger.calculation]
          ){
            attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});
          }else if(trigger.calculation && !funcs[trigger.calculation]){
            debug(`K-Scaffold Error: No function named ${trigger.calculation} found`);
          }
        }
      }
      attributes.set();
    };
    const attrTarget = {
      updates:{},
      attributes:{...attrs},
      repOrders:{},
      queue: [],
      casc:{},
      alwaysFunctions,
      processChange,
      triggerFunctions,
      initialFunction,
      getCascObj
    };
    const repeatObjects = {};
    const repeatTargetObjects = {};
    const repeatHandler = {
      get:function(obj,prop){
        const row = `${obj._section}_${obj._id}`;
        if(prop === '_isProxy'){
          return true;
        }
        if(prop === 'toJSON'){
          return () => {
            return Object.keys(obj).reduce((o,k) => {
              o[k] = attributes[`${row}_${k}`];
              return o;
            },{_id: obj._id,_section: obj._section});
          }
        }
        if(prop === 'remove'){
          return function(){
            delete attributes[obj._section][obj._id];
          }
        }
        return obj[prop];
      },
      set: function(obj,prop,value){
        if(prop === '_id' || prop === '_section'){
          throw new Error(`!!!Warning: cannot change the id or section of a repeating object!!!`);
        }else if( prop === '_index'){
          throw new Error(`!!!Warning: Cannot reorder sections by setting the _index. Sort the repeating array or use k.setSectionOrder!!!`);
        }
        const fullRef = `${obj._section}_${obj._id}_${prop}`;
        attributes[fullRef] = value;
        obj[prop] = value;
      }
    };
    const repeatArrHandler = {
      get(arr,prop){
        prop = typeof prop === 'string' ?
          prop.replace(/^\$/,'') :
          prop;
        if(prop === '_isProxy'){
          return true;
        }
        if(
          prop === 'fill' ||
          prop === 'shift' ||
          prop === 'pop' ||
          prop === 'unshift' ||
          prop === 'splice'
        ){
          throw new Error(`The ${prop} method is not allowed on section arrays`);
        }
        if(prop === 'create'){
          return function(){
            const argArray = [...arguments];
            const custom = argArray.find(e => typeof e === 'string');
            const data = argArray.find(e => typeof e === 'object' && !Array.isArray(e));
  
            const row = _generateRowID(arr._section,sections,custom);
            const id = row.replace(/repeating_[^_]+_/,'');
            arr[id] = createRepeatObj(arr._section,id);
            arr.push(arr[id]);
            if(data){
              Object.entries(data).forEach(([key,value]) => {
                if(arr[id].hasOwnProperty(key)){
                  arr[id][key] = value;
                }else{
                  debug(`!!!Warning: no input exists in ${obj._section} for the attribute "${key}"!!!`);
                }
              });
            }
            return arr[id];
          }
        }
        if(prop === 'move'){
          return function(){
            const ref = arguments[0];
            const targ = arguments[1];
            const vocal = !arguments[2]
            // TODO: add protection for missing arguments
            let id;
            let index;
            if(sections[arr._section].includes(ref)){
              id = ref;
              index = sections[arr._section].indexOf(id);
            }else if(!Number.isNaN(ref)){
              index = ref;
              id = sections[arr._section][index];
            }
            if(
              !Number.isNaN(index) &&
              id &&
              !Number.isNaN(targ)
            ){
              const obj = arr.splice(index,1);
              arr.splice(targ,0,obj);
              sections[arr._section].splice(index,1);
              sections[arr._section].splice(targ,0,id);
              if(vocal){
                attributes.set({
                  callback(){
                    _setSectionOrder(arr._section,sections[arr._section]);
                  }
                });
              }
            }
          }
        }
        if(prop === 'sort'){
          return function(){
            const callback = arguments[0];
            const vocal = !arguments[1];
            sections[arr._section].sort((a,b) => {
              const aObj = arr[a];
              const bObj = arr[b];
              const sortResult = callback(aObj,bObj);
              return sortResult;
            });
            arr.sort((a,b) => {
              const aIndex = sections[arr._section].indexOf(a._id);
              const bIndex = sections[arr._section].indexOf(b._id);
              return aIndex - bIndex;
            });
            // Defer setSectionOrder into a set() callback so it fires AFTER pending setAttrs
            // (the sort may coexist with attribute writes that create the rows being reordered).
            if(vocal){
              attributes.set({
                callback(){
                  _setSectionOrder(arr._section,sections[arr._section]);
                }
              });
            }
            return arr;
          }
        }
        if(arr[prop] || Number.isNaN(prop)){
          return Reflect.get(...arguments);
        }
        if(sections[arr._section].includes(prop)){
          arr[prop] = createRepeatObj(arr._section,prop);
          arr.push(arr[prop]);
          return arr[prop];
        }
      },
      set(obj,prop,value){
        if(prop === 'section'){
          throw new Error('!!!Warning: Section property of a repeating section is readonly!!!')
        }
      },
      deleteProperty(arr,prop){
        if(
          !prop.startsWith('_') &&
          arr[prop] &&
          arr[prop]._isProxy
        ){
          let id;
          let index;
          if(typeof prop === 'string' && prop.startsWith('-')){
            id = prop;
            index = sections[arr._section].indexOf(id);
          }else{
            index = prop;
            id = arr[index]._id;
          }
          delete arr[id];
          arr.splice(index,1);
          sections[arr._section].splice(index,1);
          const row = `${arr._section}_${id}`;
          removeRepeatingRow(row);
        }
      }
    };
    const createRepeatObj = (prop,id) => {
      const row = `${prop}_${id}`;
      const fields = repeatingSectionDetails.find(o => o.section === prop).fields;
      const retObj = fields.reduce((o,field) => {
        o[field] = attributes[`${row}_${field}`];
        return o;
      },{_id:id,_section: prop})
      repeatTargetObjects[prop] = repeatTargetObjects[prop] || {};
      repeatTargetObjects[prop][id] = retObj;
      return new Proxy(retObj,repeatHandler);
    }
    const attrHandler = {
      get:function(obj,prop){//gets the most value of the attribute.
        if(prop === '_isProxy'){
          return true;
        }
        if(prop === 'toJSON'){
          return () => ({...obj.attributes,...obj.updates});
        }else if(prop === 'set'){
          return function(){
            let {callback,vocal} = arguments[0] ? arguments[0] : {};
            // Preserve the caller's callback across cascade-queue processing. Without this,
            // the recursive set() triggered by cascade processing (which passes no callback)
            // would drop the original caller's callback silently.
            if(callback){
              obj._pendingCallback = callback;
            }
            if(sections && casc && attributes.queue.length){
              const triggerName = attributes.queue.shift();
              const trigger = getCascObj({sourceAttribute:triggerName});
              processChange({trigger,attributes,sections,casc});
            }else{
              const resolvedCallback = callback || obj._pendingCallback;
              obj._pendingCallback = undefined;
              if(kFuncs.verboseMode){
                debug({updates:obj.updates});
              }
              const trueCallback = Object.keys(obj.repOrders).length ?
                function(){
                  Object.entries(obj.repOrders).forEach(([section,order])=>{
                    _setSectionOrder(section,order)
                  });
                  resolvedCallback && resolvedCallback();
                }:
                resolvedCallback;
              Object.keys(obj.updates).forEach((key)=>obj.attributes[key] = obj.updates[key]);
              const update = obj.updates;
              obj.updates = {};
              set(update,vocal,trueCallback);
            }
          }
        }else if(/^repeating_[^_]+$/.test(prop)){
          // if it's been lazy loaded, use it
          if(!repeatObjects[prop]){
            // otherwise lazy load it
            const baseArr = [];
            baseArr._section = prop;
            repeatObjects[prop] = new Proxy(sections[prop].reduce((arr,id,i) => {
              const rowObj = createRepeatObj(prop,id,i);
              arr.push(rowObj);
              arr[id] = rowObj;
              return arr;
            },baseArr),repeatArrHandler);
          }
          return repeatObjects[prop];
        }else if(Object.keys(obj).some(key=>key===prop)){ 
          return Reflect.get(...arguments)
        }else{
          let retValue;
          switch(true){
            case obj.repOrders.hasOwnProperty(prop):
              retValue = obj.repOrders[prop];
              break;
            case obj.updates.hasOwnProperty(prop):
              retValue = obj.updates[prop];
              break;
            default:
              retValue = obj.attributes[prop];
              break;
          }
          let cascRef = `attr_${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\$X')}`.toLowerCase();
          let numRetVal = +retValue;
          if(!Number.isNaN(numRetVal) && retValue !== ''){
            retValue = numRetVal;
          }else if(cascades[cascRef] && cascades[cascRef].type === 'number'){
            // Only substitute the default when the input is explicitly typed as a number.
            // Previously the proxy also substituted when defaultValue was numeric, which caused
            // non-numeric checkbox values (e.g. '/w gm') to be clobbered by the numeric default (0).
            retValue = cascades[cascRef].defaultValue;
          }
          return retValue;
        }
      },
      set:function(obj,prop,value){
        //Sets the value. Also verifies that the value is a valid attribute value
        //e.g. not undefined, null, or NaN
        if(value || value===0 || value===''){
          if(/reporder/.test(prop)){
            let section = prop.replace(/_reporder_/,'');
            obj.repOrders[section] = value;
          }else if(`${obj.attributes[prop]}` !== `${value}` ||
            (obj.updates.hasOwnProperty(prop) && `${obj.updates[prop]}` !== `${value}`)
          ){
            if(sections && casc){
              let trigger = getCascObj({sourceAttribute:prop});
              if(!trigger.name){
                Object.assign(casc,expandCascade(cascades,sections));
                trigger = getCascObj({sourceAttribute:prop});
              }
              if(Array.isArray(trigger.affects)){
                attributes.queue.push(...trigger.affects);
              }
            }
            const repRx = /^(repeating_[^_]+)_([^_]+)_(.+)$/;
            if(repRx.test(prop)){
              const [,section,rowID,field] = prop.match(repRx);
              if(repeatObjects[section]){
                repeatObjects[section][rowID] = repeatObjects[section][rowID] || createRepeatObj(section,rowID);
                repeatTargetObjects[section][rowID][field] = value;
              }
            }
            obj.updates[prop] = value;
          }
        }else{
          debug(`!!!Warning: Attempted to set ${prop} to an invalid value:${value}; value not stored!!!`);
        }
        return true;
      },
      deleteProperty(obj,prop){
        //removes the property from the original attributes, updates, and the reporders
        Object.keys(obj).forEach((key)=>{
          delete obj[key][prop.toLowerCase()];
        });
      }
    };
    const attributes = new Proxy(attrTarget,attrHandler);
    return attributes;
  };
  
  /**
   * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.
   * @memberof Utilities
   * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.
   * @param {object} optionsObj - Object that contains options to use for this registration.
   * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `"opener"`, `"updater"`, and `"default"`. `"default"` is always used, and never needs to be passed.
   * @returns {boolean} - True if the registration succeeded, false if it failed.
   * @example
   * //Basic Registration
   * const myFunc = function({trigger,attributes,sections,casc}){};
   * k.registerFuncs({myFunc});
   * 
   * //Register a function to run on sheet open
   * const openFunc = function({trigger,attributes,sections,casc}){};
   * k.registerFuncs({openFunc},{type:['opener']})
   * 
   * //Register a function to run on all events
   * const allFunc = function({trigger,attributes,sections,casc}){};
   * k.registerFuncs({allFunc},{type:['all']})
   */
  const registerFuncs = function(funcObj,optionsObj = {}){
    if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){
      debug(`!!!! K-scaffold error: Improper arguments to register functions !!!!`);
      return false;
    }
    const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];
    const typeSwitch = {
      'opener':openHandlers,
      'updater':updateHandlers,
      'new':initialSetups,
      'all':allHandlers,
      'default':funcs
    };
    let setState;
    Object.entries(funcObj).map(([prop,value])=>{
      typeArr.forEach((type)=>{
        if(typeSwitch[type][prop]){
          debug(`!!! Duplicate function name for ${prop} as ${type}!!!`);
          setState = false;
        }else if(typeof value === 'function'){
          typeSwitch[type][prop] = value;
          setState = setState !== false ? true : false;
        }else{
          debug(`!!! K-scaffold error: Function registration requires a function. Invalid value to register as ${type} !!!`);
          setState = false;
        }
      });
    });
    return setState;
  };
  kFuncs.registerFuncs = registerFuncs;
  
  /**
   * Function that sets up the action calls used in the roller mixin.
   * @memberof Sheetworkers
   * @param {object} attributes - The attribute values of the character
   * @param {object[]} sections - All the repeating section IDs
   */
  const setActionCalls = function({attributes,sections}){
    actionAttributes.forEach((base)=>{
      let [section,,field] = k.parseTriggerName(base);
      let fieldAction = field.replace(/_/g,'-');
      if(section){
        sections[section].forEach((id)=>{
          attributes[`${section}_${id}_${field}`] = `%{${attributes.character_name}|${section}_${id}_${fieldAction}}`;
        });
      }else{
        attributes[`${field}`] = `%{${attributes.character_name}|${fieldAction}}`;
      }
    });
  };
  funcs.setActionCalls = setActionCalls;
  kFuncs.setActionCalls = setActionCalls;
  
  
  /**
   * Function that reduces Roll20 macro syntax formulas down to their calculated value.
   * @memberof Sheetworkers
   * @param {object} attributes - The attribute values of the character
   * @param {object[]} sections - All the repeating section IDs
   */
  const parseKFormula = ({trigger,attributes,sections,casc}) => {
    const [baseSection,rowID,attrName] = parseTriggerName(trigger.name);
    const repeatBlockRx = baseSection ?
      /(@{repeating_.+?_\$X_.+?})/g :
      /={([^)]*repeating_[^_]+[^)]*)}=/g;
    let mutFormula = trigger.formula;
    mutFormula = mutFormula.replace(repeatBlockRx,(match,repeatMacro) => {
      const [section] = repeatMacro.match(/repeating_[^_]+/);
      const idArray = baseSection ?
        [rowID] :
        sections[section];
      return idArray.map(id => {
          return `(${repeatMacro.replace(/repeating_[^_]+?_[^_]+?_([^}]+)/g,`${section}_${id}_$1`)})`;
        }).join(
          trigger.type === 'number' ?
            ' + ' :
            ''
        );
    });
    mutFormula = parseMacro(mutFormula,attributes)
      .replace(/@{.+?}/g,'0');
    const mathKeys = ['floor','ceil','round','abs'];
    mathKeys.forEach(func => mutFormula = mutFormula.replace(new RegExp(`${func}\\(`,'g'),`Math.${func}(`));
    const mathRx = new RegExp(`Math\\.(?:${mathKeys.join('|')})`,'g');
    let noAlphaStr = mutFormula
      .replace(mathRx,'');
    return trigger.type !== 'text' ?
      (
        !noAlphaStr.match(/[a-z]/i) ?
          eval(mutFormula) :
          undefined
      ) :
      mutFormula;
  };
  funcs.parseKFormula = parseKFormula;
  kFuncs.parseKFormula = parseKFormula;
  
  /**
   * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.
   * @memberof Sheetworkers
   * @param {string} funcName - The name of the function to invoke.
   * @param {...any} args - The arguments to call the function with.
   * @returns {function|null}
   * @example
   * //Call myFunc with two arguments
   * k.callFunc('myFunc','an argument','another argument');
   */
  const callFunc = function(funcName,...args){
    if(funcs[funcName]){
      if(kFuncs.verboseMode){
        debug(`calling ${funcName}`);
      }
      return funcs[funcName](...args);
    }else{
      debug(`Invalid function name: ${funcName}`);
      return null;
    }
  };
  kFuncs.callFunc = callFunc;/**@namespace Sheetworkers */
/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
//Sheet Updaters and styling functions
/**
 * Function that calls the K-scaffold's update and sheet initialization routines.
 */
const updateSheet = function(){
  log('updating sheet');
  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>{
    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;
    if(kFuncs.verboseMode){
      debug({sheet_version:attributes.sheet_version});
    }
    if(!attributes.sheet_version){
      Object.entries(initialSetups).forEach(([funcName,handler])=>{
        if(typeof funcs[funcName] === 'function'){
          if(kFuncs.verboseMode){
            debug(`running ${funcName}`);
          }
          funcs[funcName]({attributes,sections,casc});
        }else{
          if(kFuncs.verboseMode){
            debug(`!!!Warning!!! no function named ${funcName} found. Initial sheet setup not performed.`);
          }
        }
      });
    }else{
      Object.entries(updateHandlers).forEach(([ver,handler])=>{
        if(attributes.sheet_version < +ver){
          handler({attributes,sections,casc});
        }
      });
    }
    if(kFuncs.verboseMode){
      debug({openHandlers});
    }
    Object.entries(openHandlers).forEach(([funcName,func])=>{
      if(typeof funcs[funcName] === 'function'){
        if(kFuncs.verboseMode){
          debug(`running ${funcName}`);
        }
        funcs[funcName]({attributes,sections,casc});
      }else{
        if(kFuncs.verboseMode){
          debug(`!!!Warning!!! no function named ${funcName} found. Sheet open handling not performed.`);
        }
      }
    });
    setActionCalls({attributes,sections});
    attributes.sheet_version = kFuncs.version;
    log(`Sheet Update applied. Current Sheet Version ${kFuncs.version}`);
    attributes.set();
    log('Sheet ready for use');
  }});
};
kFuncs.updateSheet = updateSheet;

const initialSetup = function(attributes,sections){
  if(kFuncs.verboseMode){
    debug('Initial sheet setup');
  }
};

/**
 * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).
 * @memberof Sheetworkers
 * @param {Roll20Event} event - The Roll20 event object
 * @returns {void}
 * @example
 * //Call from an attribute change
 * on('change:an_attribute',k.accessSheet);
 */
const accessSheet = function(event){
  if(kFuncs.verboseMode){
    debug({funcs:Object.keys(funcs)});
    debug({event});
  }
  getAllAttrs({callback:(attributes,sections,casc)=>{
    let trigger = attributes.getCascObj(event,casc);
    attributes.processChange({event,trigger,attributes,sections,casc});
  }});
};
funcs.accessSheet = accessSheet;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/*
Cascade Expansion functions
*/
//Expands the repeating section templates in cascades to reflect the rows actually available
const expandCascade = function(cascade,sections){
  return _.keys(cascade).reduce((memo,key)=>{//iterate through cascades and replace references to repeating attributes with correct row ids.
    if(/^(?:act|attr)_repeating_/.test(key)){//If the attribute is a repeating attribute, do special logic
      expandRepeating(memo,key,cascade,sections);
    }else if(key){//for non repeating attributes do this logic
      expandNormal(memo,key,cascade,sections);
    }
    return memo;
  },{});
};
kFuncs.expandCascade = (sections) => expandCascade(cascades,sections);

const expandRepeating = function(memo,key,cascade,sections){
  key.replace(/((?:attr|act)_)(repeating_[^_]+)_[^_]+?_(.+)/,(match,type,section,field)=>{
    (sections[section]||[]).forEach((id)=>{
      memo[`${type}${section}_${id}_${field}`]=_.clone(cascade[key]);//clone the details so that each row's attributes have correct ids
      memo[`${type}${section}_${id}_${field}`].name = `${section}_${id}_${field}`;
      if(key.startsWith('attr_')){
        memo[`${type}${section}_${id}_${field}`].affects = memo[`${type}${section}_${id}_${field}`].affects.reduce((m,affected)=>{
          if(affected.startsWith(section)){//otherwise if the affected attribute is in the same section, simply set the affected attribute to have the same row id.
            m.push(applyID(affected,id));
          }else if(/repeating/.test(affected)){//If the affected attribute isn't in the same repeating section but is still a repeating attribute, add all the rows of that section
            addAllRows(affected,m,sections);
          }else{//otherwise the affected attribute is a non repeating attribute. Simply add it to the computed affected array
            m.push(affected);
          }
          return m;
        },[]);
      }
    });
  });
};

const applyID = function(affected,id){
  return affected.replace(/(repeating_[^_]+_)[^_]+(.+)/,`$1${id}$2`);
};

const expandNormal = function(memo,key,cascade,sections){
  memo[key] = _.clone(cascade[key]);
  if(key.startsWith('attr_')){
    memo[key].affects = memo[key].affects || [];
    memo[key].affects = memo[key].affects.reduce((m,a)=>{
      if(/^repeating/.test(a)){
        addAllRows(a,m,sections);
      }else{
        m.push(a);
      }
      return m;
    },[]);
  }
};

const addAllRows = function(affected,memo,sections){
  affected.replace(/(repeating_[^_]+?)_[^_]+?_(.+)/,(match,section,field)=>{
    sections[section].forEach(id=>memo.push(`${section}_${id}_${field}`));
  });
};/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.
 * @namespace Sheetworkers.Sheetworker Aliases
 */
/**
 * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.
 * @memberof Sheetworker Aliases
 * @name setSectionOrder
 * @param {string} section - The name of the section, with or without `repeating_`
 * @param {string[]} order - Array of ids describing the desired order of the section.
 * @returns {void}
 * @example
 * //Set the order of a repeating_weapon section
 * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
 * //Can also specify the section name without the repeating_ prefix
 * k.setSectionOrder('equipment',['id1','id2','id3']);
 */
const _setSectionOrder = function(section,order){
  let trueSection = section.replace(/repeating_/,'');
  setSectionOrder(trueSection,order);
};
// deprecation warning added to setSectionOrder
kFuncs.setSectionOrder = (section,order) => {
  debug('###Deprecation: It is recommended to use the "move" method of the nested section info feature of the attributes object instead of setSectionOrder');
  _setSectionOrder(section,order);
};

/**
 * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.
 * @memberof Sheetworker Aliases
 * @name removeRepeatingRow
 * @param {string} row - The row id to be removed
 * @param {attributesProxy} attributes - The attribute values currently in memory
 * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.
 * @returns {void}
 * @example
 * //Remove a repeating Row
 * k.getAllAttrs({
 *  callback:(attributes,sections)=>{
 *    const rowID = sections.repeating_equipment[0];
 *    k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);
 *    console.log(sections.repeating_equipment); // => rowID no longer exists in the array.
 *    console.log(attributes[`repeating_equipment_${rowID}_name`]); // => undefined
 *  }
 * })
 */
const _removeRepeatingRow = function(row,attributes,sections){
  Object.keys(attributes.attributes).forEach((key)=>{
    if(key.startsWith(row)){
      delete attributes[key];
    }
  });
  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');
  sections[section] = sections[section].filter((id)=>id!==rowID);
  delete attributes[section][rowID];
  removeRepeatingRow(row);
};
kFuncs.removeRepeatingRow = _removeRepeatingRow;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.
 * @memberof Sheetworker Aliases
 * @name getAttrs
 * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.
 * @example
 * //Gets the attributes named in props.
 * k.getAttrs({
 *  props:['attribute_1','attribute_2'],
 *  callback:(attributes)=>{
 *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
 *    attributes.attribute_1 = 'new value';
 *    attributes.set();
 *  }
 * })
 */
const _getAttrs = function({props=baseGet,callback}){
  getAttrs(props,(values)=>{
    const attributes = createAttrProxy(values);
    callback(attributes);
  });
};
kFuncs.getAttrs = _getAttrs;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.
 * @memberof Sheetworker Aliases
 * @param {Object} args
 * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. 
 * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.
 * @example
 * //Get every K-scaffold linked attribute on the sheet
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Work with the attributes as you please.
 *    attributes.some_attribute = 'a value';
 *    attributes.set();//Apply our change
 *  }
 * })
 */
const getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){
  getSections(sectionDetails,(repeats,sections)=>{
    getAttrs([...props,...repeats],(values)=>{
      const casc = expandCascade(cascades,sections);
      const attributes = createAttrProxy(values,sections,casc);
      orderSections(attributes,sections,casc);
      callback(attributes,sections,casc);
    })
  });
};
kFuncs.getAllAttrs = getAllAttrs;

/**
 * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.
 * @memberof Sheetworker Aliases
 * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.
 * @param {string} sectionDetails.section - The full name of the repeating section including the `repeating_` prefix.
 * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section
 * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.
 * @example
 * // Get some section details
 * const sectionDetails = {
 *  {section:'repeating_equipment',fields:['name','weight','cost']},
 *  {section:'repeating_weapon',fields:['name','attack','damage']}
 * };
 * k.getSections(sectionDetails,(attributeNames,sections)=>{
 *  console.log(attributeNames);// => Array containing all row specific attribute names
 *  console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
 * })
 */
const getSections = function(sectionDetails,callback){
  let queueClone = _.clone(sectionDetails);
  const worker = (queue,repeatAttrs=[],sections={})=>{
    let detail = queue.shift();
    getSectionIDs(detail.section,(IDs)=>{
      sections[detail.section] = IDs;
      IDs.forEach((id)=>{
        detail.fields.forEach((f)=>{
          repeatAttrs.push(`${detail.section}_${id}_${f}`);
        });
      });
      repeatAttrs.push(`_reporder_${detail.section}`);
      if(queue.length){
        worker(queue,repeatAttrs,sections);
      }else{
        callback(repeatAttrs,sections);
      }
    });
  };
  if(!queueClone[0]){
    callback([],{});
  }else{
    worker(queueClone);
  }
};
kFuncs.getSections = getSections;

// Sets the attributes while always calling with {silent:true}
// Can be awaited to get the values returned from _setAttrs
/**
 * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.
 * @memberof Sheetworker Aliases
 * @alias setAttrs
 * @param {object} obj - The object containting attributes to set
 * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.
 * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.
 * @example
 * //Set some attributes silently
 * k.setAttrs({attribute_1:'new value'})
 * //Set some attributes and triggers listeners
 * k.setAttrs({attribute_1:'new value',true})
 * //Set some attributes and call a callback function
 * k.setAttrs({attribute_1:'new value'},null,()=>{
 *  //Do something after the attribute is set
 * })
 */
const set = function(obj,vocal=false,callback){
  setAttrs(obj,{silent:!vocal},callback);
};
kFuncs.setAttrs = set;

const generateCustomID = function(string){
  if(!string.startsWith('-')){
    string = `-${string}`;
  }
  rowID = generateRowID();
  let re = new RegExp(`^.{${string.length}}`);
  return `${string}${rowID.replace(re,'')}`;
};


/**
 * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.
 * @memberof Sheetworker Aliases
 * @name generateRowID
 * @param {sectionObj} sections
 * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.
 * @returns {string} - The created ID
 * @example
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Create a new row ID
 *    const rowID = k.generateRowID('repeating_equipment',sections);
 *    console.log(rowID);// => repeating_equipment_-p8rg908ug0suzz
 *    //Create a custom row ID
 *    const customID = k.generateRowID('repeating_equipment',sections,'custom');
 *    console.log(customID);// => repeating_equipment_-custom98uadj89kj
 *  }
 * });
 */
const _generateRowID = function(section,sections,customText){
  let rowID = customText ?
    generateCustomID(customText) :
    generateRowID();
  section = section.match(/^repeating_[^_]+$/) ?
    section :
    `repeating_${section}`;
  sections[section] = sections[section] || [];
  sections[section].push(rowID);
  return `${section}_${rowID}`;
};
kFuncs.generateRowID = (section,sections,customText) => {
  debug('###Deprecation: It is recommended to use the "create" method of the nested section info feature of the attributes object instead of k.generateRowID');
  return _generateRowID(section,sections,customText);
};

/**
 * An alias for [Roll20's getTranslationByKey](https://wiki.roll20.net/Sheet_Worker_Scripts#getTranslationByKey.28.5Bkey.5D.29) that also supports data-i18n-vars syntax replacement and returns the translation key if no value is found instead of `false`.
 * @memberof Sheetworker Aliases
 * @name getTranslationByKey
 * @param {string} key - The translation key to look up.
 * @param {string[]} [variables = []] - An array of variable values to replace variable indexes with.
 * @returns {string}
 */
const _getTranslationByKey = (key,variables = []) => {
  let translate = getTranslationByKey(key) || key;
  console.warn('getTranslationByKey',getTranslationByKey(key));
  console.warn('translate:',translate);
  variables.forEach((v,i) => {
    translate = translate.replace(new RegExp(`\\{\\{${i}\\}\\}`,'g'),v);
  });
  return translate;
}
kFuncs.getTranslationByKey = _getTranslationByKey;

/**
 * Assembles the roll string from the roll object
 * @param {object} rollObj - object describing the roll
 * @param {string} [rollStart = '@{template_start}'] - The string to start the roll with.
 * @returns {string}
 */
const assembleRoll = (rollObj,rollStart = kFuncs.defaultRollStart) => {
  return Object.entries(rollObj).reduce((str,[field,content])=>{
    return str += ` {{${field}=${content ?? ''}}}`;
  },`${rollStart}`);
};


/**
 * @typedef {Object} kRoll
 * @property {Object} roll - The roll object returned by [Roll20's startRoll](https://wiki.roll20.net/Custom_Roll_Parsing#Sheetworker_Functions).
 * @property {Function} roll.finish - Finishes the associated roll passing it the computeObj and rollId.
 * @property {Object} computeObj - object for storing manipulations to the roll. Assign manipulations to this, DO NOT reassign it to a new object.
 */

/**
 * 
 * @param {object} rollObj - Object specifying the fields to pass to the rolltemplate. Object keys are field names. Object values are the field values.
 * @param {string} [startString = '@{template_start}'] - Text that should be prepended to the roll string that results from rollObj.
 * @returns {kRoll} 
 */
const _startRoll = async (rollObj,startString) => {
  const rollString = assembleRoll(rollObj,startString);
  const roll = await startRoll(rollString);
  const computeObj = {};
  roll.finish = () => {
    finishRoll(roll.rollId,computeObj);
  };
  return {roll, computeObj};
};
kFuncs.startRoll = _startRoll;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
const listeners = {};

/**
 * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.
 * @memberof Variables
 * @var
 * @type {array}
 */
const baseGet = Object.entries(cascades).reduce((memo,[attrName,detailObj])=>{
  if(!/repeating/.test(attrName) && detailObj.type !== 'action'){
    memo.push(detailObj.name);
  }
  if(detailObj.listener){
    listeners[detailObj.listener] = detailObj.listenerFunc;
  }
  return memo;
},[]);
kFuncs.baseGet = baseGet;

const registerEventHandlers = function(){
  on('sheet:opened',updateSheet);
  if(kFuncs.verboseMode){
    debug({funcKeys:Object.keys(funcs),funcs});
  }
  //Roll20 change and click listeners
  Object.entries(listeners).forEach(([event,funcName])=>{
    if(funcs[funcName]){
      on(event,funcs[funcName]);
    }else{
      debug(`!!!Warning!!! no function named ${funcName} found. No listener created for ${event}`,true);
    }
  });
  log(`kScaffold Loaded`);
};
setTimeout(registerEventHandlers,0);//Delay the execution of event registration to ensure all event properties are present.

/**
 * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.
 * @memberof Sheetworkers
 * @param {object} event - The R20 event object
 */
const addItem = function(event){
  let [,,section] = parseClickTrigger(event.triggerName);
  section = section.replace(/add-/,'');
  getAllAttrs({
    callback:(attributes,sections,casc) => {
      let row = _generateRowID(section,sections);
      attributes[`${row}_name`] = '';
      setActionCalls({attributes,sections});
      const trigger = cascades[`fieldset_repeating_${section}`];
      if(trigger){
        if(trigger.addFuncs){
          trigger.addFuncs.forEach((funcName) => {
            if(funcs[funcName]){
              funcs[funcName]({attributes,sections,casc,trigger,newRow:row});
            }
          });
        }
        if(Array.isArray(trigger.affects)){
          attributes.queue.push(...trigger.affects);
        }
      }
      attributes.set({attributes,sections,casc});
    }
  });
};
funcs.addItem = addItem;/**
 * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.
 * @memberof Sheetworkers
 * @param {Object} trigger - The trigger object
 * @param {object} attributes - The attribute values of the character
 */
const kSwitchTab = function ({ trigger, attributes }) {
  const [container, tab] = (
    trigger.name.match(/nav-tabs-(.+)--(.+)/) ||
    []
  ).slice(1);
  $20(`[data-container-tab="${container}"]`).removeClass('k-active-tab');
  $20(`[data-container-tab="${container}"][data-tab="${tab}"]`).addClass('k-active-tab');
  $20(`[data-container-button="${container}"]`).removeClass('k-active-button');
  $20(`[data-container-button="${container}"][data-button="${tab}"]`).addClass('k-active-button');
  const tabInputName = `${container.replace(/\-/g,'_')}_tab`;
  if(persistentTabs.indexOf(tabInputName) > -1){
    attributes[tabInputName] = trigger.name;
  }
}

registerFuncs({ kSwitchTab });

/**
 * Sets persistent tabs to their last active state
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 */
const kTabOnOpen = function({trigger,attributes,sections,casc}){
  if(typeof persistentTabs === 'undefined') return;
  persistentTabs.forEach((tabInput) => {
    const pseudoTrigger = {name:attributes[tabInput]};
    kSwitchTab({trigger:pseudoTrigger, attributes});
  });
};
registerFuncs({ kTabOnOpen },{type:['opener']});
  return kFuncs;
  }());
  const actionAttributes = [];
  k.debugMode = true;
  k.sheetName = "ArM5";
  k.version = "2.0";
   
  // k-scaffold fix ?
  const persistentTabs = [];
  
  // Top-level object for the sheetworkers
  const arm5 = {sheet: {}};
  
  // Legacy sheetworkers
   
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
  
  
  const helpers = (() => {
  class KeyError extends Error {
    constructor(obj, key) {
      let description;

      try {
        description = JSON.stringify(obj, null, 2);
      } catch {
        description = String(obj);
      }
      if (description === undefined) {
        description = String(obj);
      }

      super(`Key '${key}' not found on ${typeof obj} object ${description}`);
      this.name = "KeyError";
      this.obj = obj;
      this.key = key;
    }
  }

  const get = (obj, key) => {
    if (obj == null || obj[key] == null) {
      throw new KeyError(obj, key);
    }

    return obj[key];
  };

  const as_number = (value) => {
    if (value == null || (typeof value === "string" && value.trim() === "")) {
      throw new TypeError(`Cannot convert '${value}' to a number`);
    }

    const result = Number(value);

    if (Number.isNaN(result)) {
      throw new TypeError(`Cannot convert '${value}' to a number`);
    }

    return result;
  };

  return {
    KeyError,
    get,
    as_number,
  };
})();

/**
 * The function to create a new alert in an `+alert` mixin. Retruns the RowID (including the repeating secgion namt) of the created alert.
 * @memberof Sheetworkers
 * @param {string} name - The name of the alert. It will be prepended by `repeating_alerts--`. Note that contrary to the PUG mixin, this doesn't sanitize the name, so you'll need to spell out the sanitized version.
 * @param {string} title - The text to put in the title of the alert, after the level icon.
 * @param {string} text - The text to write as the content of the alert. Can contain newlines, as it is written to a textarea.
 * @param {Object} attributes - The `attributes` object given by k-Scaffold that contains the attributes of the sheet
 * @param {Object} sections - The `sections` object given by k-Scaffold that contains the sections of the sheet
 * @param {level} string - The level of the alert. One of "info", "warning", "error", "success". Changes the default styling of the alert.
 */
const kCreateAlert = function ({ name, title, text, attributes, sections, level = "info" }) {
  if (["info", "warning", "error", "success"].indexOf(level) === -1) {
    throw new Error(`Invalid alert level "${level}"`);
  }
  // Warning: the name isn't sanitized like it is in the PUG, might create discrepancies
  const section = `repeating_alerts--${name}`;
  // Contrary to doc, k.generateRowID also includes the section name in the returned value
  const rowID = k.generateRowID(section, sections);
  attributes[`${rowID}_level`] = level;
  attributes[`${rowID}_title`] = title;
  attributes[`${rowID}_text`] = text;
  return rowID;
};

/**
 * The default trigger called when one clicks the close button on an alert. Deletes the triggering alert from the repeating section.
 * @memberof Sheetworkers
 * @param {string} trigger - The trigger object passed by kScaffold
 * @param {Object} attributes - The `attributes` object given by k-Scaffold that contains the attributes of the sheet
 * @param {Object} sections - The `sections` object given by k-Scaffold that contains the sections of the sheet
 */
const kDeleteAlert = function ({ trigger, attributes, sections }) {
  const [section, rowID, _] = k.parseTriggerName(trigger.name);
  k.removeRepeatingRow(`${section}_${rowID}`, attributes, sections);
};

k.registerFuncs({ kDeleteAlert: kDeleteAlert });

  
  
   

// Clear the scheduled updates on a kScaffold `attributes` object
const clearAttributesUpdates = function (attributes) {
    const updates = attributes.updates;
    // From https://stackoverflow.com/questions/684575/how-to-quickly-clear-a-javascript-object
    // NOTE: we don't really now what the `updates` object is, so use the safer deletion code
    for (const prop of Object.getOwnPropertyNames(updates)) {
        delete updates[prop];
    }
};

// Function to help building update function that are properly hooked up in our system
// It wraps a function such that:
//  - If the wrapped function fails and raises an exception:
//    - All pending update on the `attributes` object are cleared
//    - An error alert is created with the error details to notify the player
//    - The `update_error_rowid` hidden attribute is set to the RowID of the created alert
//    - Forces an update of the sheet's attribute, to effectively create said alert and store the RowID
//    - Forwards the caugh error to the caller to interrupt kScaffold update mecanism
//  - If the `update_error_rowid` hidden attribute is set to an existing row at the start of the function, it immediately
//    error outs, preventing kScaffold update from running to completion. This is because there is still
//    an error on the sheet that prevents the update from working, so we cannot continue.
const ATTR_LOCK_ROW_ID = "update_error_rowid";
const ALERT_SECTION = "repeating_alerts--global-alerts";
const checkUpdateLock = function({  attributes, sections }) {
    const lock_row_id = attributes[ATTR_LOCK_ROW_ID];
    if (lock_row_id) {
        const row_ids = sections[ALERT_SECTION];
        if (! row_ids.includes(lock_row_id)) {
            console.log(`The alert '${lock_row_id}' locking the update system was not found in the alert section, removing the lock`);
            attributes[ATTR_LOCK_ROW_ID] = "";
        } else {
            k.debug(`The update system is locked by alert row ${lock_row_id}, exiting update stack...`);
            throw new Error(`Interrupted updates: previous error at row ${lock_row_id} is locking updates`);
        }
    }
};
const getUpdateErrorAlertText = function({func, error}) {
    return `An update of the sheet failed. Please contact the sheet developpers for help (see the Help menu). Please provide the full stacktrace below when reporting errors.

The update system has been locked so that you can fix the problem. Closing this alert will unlock the update system and trigger a new update attempt the next time the sheet is opened.

Stacktrace for function '${func.name || '<anonymous>'}'
──────────
${error.stack}
${error}
`
};

const wrapUpdateFunction = function (func) {
    const wrapper = function ({ trigger, attributes, sections, casc }) {
        // If the update system is currently on hold due to an error, exit early
        checkUpdateLock({attributes, sections})
        // Try to execute the wrapped function
        try {
            func({ trigger, attributes, sections, casc });
        } catch (error) {
            // Update function failed, notify the user and exit
            // First, cancel pending updates: update function may have scheduled partial updates
            clearAttributesUpdates(attributes);
            // Then, generate a new alert for the user
            const text = getUpdateErrorAlertText({func, error});
            const row_name = kCreateAlert({
                name: "global-alerts",
                title: "!! Update error !! Your sheet is likely broken, please read on",
                text,
                level: "error",
                attributes,
                sections,
            });
            // Register the error to lock the update system
            const [section, rowID, attrName] = k.parseRepeatName(row_name);
            attributes[ATTR_LOCK_ROW_ID] = rowID;
            // Forcefully update the attributes of the sheet, because we'll throw an Error so kScaffold won't do it
            attributes.set({ attributes });
            k.debug(`Locked update execution on alert row ${rowID}`);
            // Finally, forward our error to the caller
            throw error;
        }

    };
    return wrapper;
};

const onAlertRemoved = function ({ trigger, attributes, sections, casc }) {
    if (attributes["update_error_rowid"]) {
        const [section, rowID, attrName] = k.parseTriggerName(trigger.name);
        // Roll20 event contain a lowercase rowID. There *is* a risk of clash, but we can't do better
        // We also lowercase the event in case this changes in the future, so that the sheet doesn't break
        if (rowID.toLowerCase() === attributes["update_error_rowid"].toLowerCase()) {
            k.debug(`Cleared attribute 'update_error_rowid' because row ${rowID} was deleted`);
            attributes["update_error_rowid"] = "";
            // TODO: trigger an update by calling a k.updateSheet when this is possible
        }
    }
    kDeleteAlert({ trigger, attributes, sections, casc });
};
k.registerFuncs({ onAlertRemoved });


const updateSpellArts = wrapUpdateFunction(
    function updateSpellArts({ attributes, sections }) {
        // Only update if the update was not previously applied
        // In the old sheet system, we had an explicit attribute to hide/display
        // each alert, and updating spells was conditionned on this alert being shown
        // We re-use that legacy attribute to detect if the alert is needed. It
        // Is forcefully registered into k-scaffold in _updates.pug, so k-Scaffold
        // loads it if available
        if (attributes["alert-161-spell-update"] === 0) {
            const techRename = {
                0: "unselected",
                1: "Creo",
                2: "Intellego",
                3: "Muto",
                4: "Perdo",
                5: "Rego"
            };
            const formRename = {
                0: "unselected",
                1: "Animal",
                2: "Aquam",
                3: "Auram",
                4: "Corpus",
                5: "Herbam",
                6: "Ignem",
                7: "Imaginem",
                8: "Mentem",
                9: "Terram",
                10: "Vim"
            };
            const ids = sections.repeating_weapons || [];
            const details = [];
            for (const rowID of ids) {
                const row = `repeating_spell_${rowID}`;
                attributes[`${row}_spell_tech_name`] = techRename[attributes[`${row}_Technique_select`]] || "unselected";
                attributes[`${row}_spell_form_name`] = formRename[attributes[`${row}_Form_select`]] || "unselected";
                details.push(attributes[`${row}_spell_name`]);
            }
            if (details.length) {
                message = [
                    "Spells technique & form selection have been converted to the new format",
                    ""
                ];
                details.forEach(name => message.push(`  - Updated spell '${name}'`));
                helpers.alerts.add({
                    title: "Update v1.6.1 - Spell update",
                    text: message.join("\n"),
                    level: "success",
                    attributes: attributes,
                    sections: sections,
                });
            }
        }
    }
);


const renameWeaponAttributes = wrapUpdateFunction(
    function renameWeaponAttributes({ attributes, sections }) {
        const fixes = {
            "_Wounds_Load": "_Weapon_Load",
            "_Wounds_Range": "_Weapon_Range",
        };
        const ids = sections.repeating_weapons || [];
        const details = [];
        for (const id of ids) {
            // Sometimes the array of ids contains an empty string
            if (id) {
                for (const [old, updated] of Object.entries(fixes)) {
                    const old_name = `repeating_weapons_${id}${old}`;
                    const new_name = `repeating_weapons_${id}${updated}`;
                    if (attributes[old_name]) {
                        attributes[new_name] = attributes[old_name];
                        attributes[old_name] = "";
                        details.push(attributes[`repeating_weapons_${id}_Weapon_name`]);
                    }
                }
            }
        }
        if (details.length) {
            message = [
                "Weapons internal attributes have been corrected.",
                ""
            ];
            details.forEach(name => message.push(`  - Updated weapon '${name}'`));
            helpers.alerts.add({
                title: "Update v1.7 - Magic & Armory",
                text: message.join("\n"),
                level: "success",
                attributes: attributes,
                sections: sections,
            });
        }
    }
);

// NOTE: not wrapped by wrapUpdateFunction because sub-functions already are
const updateToKScaffold = function updateToKScaffold({ trigger, attributes, sections, casc }) {
    // This attribute is only defined on old sheets
    if (typeof attributes["notNew"] !== "undefined") {
        updateSpellArts({ trigger, attributes, sections, casc });
        renameWeaponAttributes({ trigger, attributes, sections, casc });
    }
};
k.registerFuncs({ updateToKScaffold }, { type: ["new"] });

// const _testAlerts = function ({ trigger, attributes, sections }) {
//     ["info", "warning", "error", "success"].forEach(level => {
//         kCreateAlert({
//             name: "global-alerts",
//             title: "test alert",
//             text: "test alert\nnewline",
//             level,
//             attributes,
//             sections

//         });
//     });
// }
// k.registerFuncs({ _testAlerts }, { type: ["opener"] });

// const displayKScaffoldArgs = function ({ trigger, attributes, sections, casc }) {
//     console.log("Displaying kScaffold arguments");
//     console.log(trigger);
//     console.log(attributes);
//     console.log(sections);
//     console.log(casc);
// };

// k.registerFuncs({ displayKScaffoldArgs }, { type: ["opener"] });
   
  
  
  //Wounds
  on("change:Wounds_Light1 change:Wounds_Light2 change:Wounds_Light3 change:Wounds_Light4 change:Wounds_Light5 change:Wounds_Medium1 change:Wounds_Medium2 change:Wounds_Medium3 change:Wounds_Medium4 change:Wounds_Medium5 change:Wounds_Heavy1 change:Wounds_Heavy2 change:Wounds_Heavy3 change:Wounds_Heavy4 change:Wounds_Heavy5 change:Wounds_Incapacitated change:Wounds_Dead sheet:opened", function() {
      getAttrs(["Wounds_Light1", "Wounds_Light2", "Wounds_Light3", "Wounds_Light4", "Wounds_Light5", "Wounds_Medium1", "Wounds_Medium2", "Wounds_Medium3", "Wounds_Medium4", "Wounds_Medium5", "Wounds_Heavy1", "Wounds_Heavy2", "Wounds_Heavy3", "Wounds_Heavy4", "Wounds_Heavy5", "Wounds_Incapacitated", "Wounds_Dead"], function(values) {
          setAttrs({
              wound_total: (+values.Wounds_Light1 + +values.Wounds_Light2 + +values.Wounds_Light3 + +values.Wounds_Light4 + +values.Wounds_Light5 + +values.Wounds_Medium1 + +values.Wounds_Medium2 + +values.Wounds_Medium3 + +values.Wounds_Medium4 + +values.Wounds_Medium5 + +values.Wounds_Heavy1 + +values.Wounds_Heavy2 + +values.Wounds_Heavy3 + +values.Wounds_Heavy4 + +values.Wounds_Heavy5 + +values.Wounds_Incapacitated + +values.Wounds_Dead)
          });
      });
  });
  
  const calc_fatigue_penalty = function({attributes}) {
      const penalty_table = {
          "winded": 0,
          "weary" :-1,
          "tired" :-3,
          "dazed" :-5,
      };
      const level = attributes["fatigue_level"];
      return attributes["fatigue_ignored"] ? 0 : penalty_table[level];
  };
  k.registerFuncs({calc_fatigue_penalty});
  
  const calc_wound_penalty = function({attributes}) {
      return  attributes["wound_ignored"] ? 0 : attributes["wound_total"];
  };
  k.registerFuncs({calc_wound_penalty});
  
  const section_conditional_sum = function({trigger, attributes, sections}) {
      let result;
      try {
          const section = helpers.get(trigger, "sum_section");
          const condition = helpers.get(trigger, "sum_condition");
          const value = helpers.get(trigger, "sum_value");
          result = (
              helpers.get(sections, section)
              .filter(row_id => helpers.get(attributes, `${section}_${row_id}_${condition}`))
              .map(row_id =>  helpers.as_number(helpers.get(attributes, `${section}_${row_id}_${value}`)))
              .reduce(
                  (sum, value) => sum + value,
                  0
              )
          );
      }
      catch (error) {
          console.log({func:"section_conditional_sum", trigger, attributes, sections});
          throw error;
      }
      //console.log({func:"section_conditional_sum", trigger, attributes, sections, result});
      return result;
  };
  k.registerFuncs({section_conditional_sum});
  
  const section_conditional_sum_detail = function({trigger, attributes, sections}) {
      const section = helpers.get(trigger, "sum_section");
      const condition = helpers.get(trigger, "sum_condition");
      const value = helpers.get(trigger, "sum_value");
      const label = helpers.get(trigger, "sum_label");
  
      return (
          helpers.get(sections, section)
          .filter(row_id => helpers.get(attributes, `${section}_${row_id}_${condition}`))
          .map(row_id => {
              const row_value = helpers.as_number(helpers.get(attributes, `${section}_${row_id}_${value}`));
              const row_label = helpers.get(attributes, `${section}_${row_id}_${label}`);
              return `(${row_value} [${row_label}])`;
          })
          .join(" + ")
      );
  };
  k.registerFuncs({section_conditional_sum_detail});
  
  const calc_total_load = ({attributes}) => {
      const weapon_load = Number(helpers.get(attributes, "weapon_total_load"));
      const armor_load = Number(helpers.get(attributes, "armors_total_load"));
      const total_load = weapon_load + armor_load;
      console.log({"func": "calc_total_load", attributes, weapon_load, armor_load, total_load});
      return total_load;
  };
  k.registerFuncs({calc_total_load});
  
  const calc_burden = ({attributes}) => {
      const total_load = helpers.get(attributes, "total_load");
      // The load & burden table in AM5 core rulebook has the burden progress like an Art using
      // load as xp
      // This is represented by the closed-form formula for the sum of integers:
      //
      //      load = burden * (budren + 1 ) / 2
      //
      // where load is the load required to reach the burden on the right-hand-side.
      //
      // Solving for burden using the quadratic formula yields
      //
      //      burden = (sqrt(8 * load + 1) - 1) / 2
      //
      // The Definitive Edition rules state:
      //
      //   > Burden increases when Load reaches the level for that Burden, so that a character with
      //   > a Load of 9 has a Burden of 3.
      //   >
      //   > Ars Magica 5th Edition, Definitive Edition, CC BY-SA 4.0
      //
      // so we must round down to get the correct burden given a load
      const burden = Math.floor((Math.sqrt(8 * total_load + 1) - 1) / 2);
      //console.log({"func": "calc_burden", attributes, total_load, burden});
      return burden;
  
  };
  k.registerFuncs({calc_burden});
  
  const calc_encumbrance = ({attributes}) => {
      const burden = Number(helpers.get(attributes, "burden"));
      const strength = Number(helpers.get(attributes, "strength_score"));
      const encumbrance = Math.max(0, burden - Math.max(0, strength));
      //console.log({"func": "calc_encumbrance", attributes, burden, strength, encumbrance});
      return encumbrance;
  };
  k.registerFuncs({calc_encumbrance});
  
  
  // Manual summations in repeating sections without using k-scaffold. K-scaffold doesn't work well with
  // the weapons repeating section due to us injecting data into k-scaffold interlals in _updates.pug
  // to make k-scaffold aware of legacy attributes in the weapons sections.
  // For now it is simpler to keep the summation manuals
  const _validate_summations = ({section, summations}) => {
      const error = message => {
          console.error(`Invalid summations for "${section}": ${message}`);
      };
  
      if (!Array.isArray(summations) || summations.length === 0) {
          error("summations must be a non-empty array.");
          return false;
      }
  
      const totals = new Set();
  
      for (const [index, summation] of summations.entries()) {
          if (!summation || typeof summation !== "object") {
              error(`summation at index ${index} must be an object.`);
              return false;
          }
  
          const {value, total, condition, label, total_detailed} = summation;
  
          if (!value || !total) {
              error(`summation at index ${index} requires value and total.`);
              return false;
          }
  
          if ((label === undefined) !== (total_detailed === undefined)) {
              error(
                  `summation at index ${index} must specify both label and total_detailed, or neither.`
              );
              return false;
          }
  
          for (const name of [total, total_detailed]) {
              if (name === undefined) {
                  continue;
              }
  
              if (totals.has(name)) {
                  error(`duplicate output attribute "${name}".`);
                  return false;
              }
  
              totals.add(name);
          }
      }
  
      return true;
  };
  
  const _calculate_summations = ({section, summations, row_ids, attributes}) => {
      const results = summations.map(({ value, condition, total, label, total_detailed}) => {
          const filtered_row_ids = (
              row_ids
              .filter(row_id => ((condition === undefined) ||(helpers.get(attributes, `repeating_${section}_${row_id}_${condition}`) === "1")))
          );
          const values = filtered_row_ids.map(row_id => helpers.get(attributes, `repeating_${section}_${row_id}_${value}`));
          const total_value = values.reduce((sum, value) => sum + (Number(value) || 0), 0);
  
          let values_labeled, total_value_labeled;
          if (label !== undefined && total_detailed !== undefined ) {
              values_labeled = filtered_row_ids.map(row_id => {
                  const row_value = helpers.get(attributes, `repeating_${section}_${row_id}_${value}`);
                  const row_label = helpers.get(attributes, `repeating_${section}_${row_id}_${label}`);
                  return `(${row_value} [${row_label}])`
              });
              total_value_labeled = values_labeled.join(" + ") || "0";
          }
          return {
              summation: { value, condition, total, label, total_detailed},
              filtered_row_ids, values, total_value, values_labeled, total_value_labeled
          };
      });
      const totals = Object.fromEntries(
          results.flatMap(({ summation, total_value, total_value_labeled }) => {
              const { total, total_detailed } = summation;
  
              return [
                  ...(total !== undefined
                      ? [[total, total_value]]
                      : []),
                  ...(total_detailed !== undefined && total_value_labeled !== undefined
                      ? [[total_detailed, total_value_labeled]]
                      : [])
              ];
          })
      );
      //console.log({func: "_calculate_summations", section, summations, row_ids, attributes, results, totals});
      return totals;
  };
  
  const register_repeated_section_totals = ({section, summations}) => {
      if (!_validate_summations({section, summations})) {
          return;
      }
      const unique_attr_names = [
          ...new Set(
              summations.flatMap(({ value, condition, label }) =>
                  [value, condition, label].filter(v => v !== undefined)
              )
          )
      ];
  
      const events = [
          "sheet:opened",
          `add:repeating_${section}`,
          `remove:repeating_${section}`,
          ...unique_attr_names.map(attr => `change:repeating_${section}:${attr}`)
      ].join(" ");
      console.log("Registering events for section: " + section + " -> " + events);
  
      on(events, function() {
          getSectionIDs("repeating_" + section, row_ids => {
              const attr_names = row_ids.flatMap(
                  row_id => unique_attr_names.map(attr => `repeating_${section}_${row_id}_${attr}`)
              );
              getAttrs(attr_names, (attributes) => {
                  setAttrs(_calculate_summations({section, summations, row_ids, attributes}));
              });
          });
      });
  };
  
  register_repeated_section_totals({
      section: "combat-mods",
      summations: ["init", "atk", "dfn", "dam", "soak"].map(value => ({
          value: `combat-mods_${value}`,
          condition: "isactive",
          total: `combat-mods_total_${value}`,
          label: "combat-mods_name",
          total_detailed: `combat-mods_total_${value}_detailed`,
      })),
  });
  register_repeated_section_totals({
      section: "weapons",
      summations: [{
          value: "Weapon_Load",
          condition: "is_active",
          total: "weapon_total_load",
      }],
  });

console.debug = vi.fn(a => null);
console.log = vi.fn(a => null);
console.table = vi.fn(a => null);
module.exports = {k,...global};