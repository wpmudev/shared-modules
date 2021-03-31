import { PresetsTable } from './elements/table';
import { PresetsAccordion } from './elements/accordion';
import { PresetsWidget } from './sections/shared-presets-widget';
import { PresetsPage } from './sections/shared-presets-page';

const Presets = {};

Presets.Table = PresetsTable;
Presets.Accordion = PresetsAccordion;

export { Presets, PresetsWidget, PresetsPage };