import { Box, Button, Checkbox, FormLabel, Grid, ListItemIcon, Menu, MenuItem, MenuList, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Alert, ALERT_CATEGORY_LABELS, EDRAlert, SIEMAlert, isEDRAlert, isSIEMAlert } from "../../../alert/alert.type";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const FIELD_LABELS: Partial<Record<keyof SIEMAlert | keyof EDRAlert, string>> = {
  sourceHost: "Source Host",
  destinationHost: "Destination Host",
  sourceIP: "Source IP",
  destinationIP: "Destination IP",
  sourceUser: "Source User",
  destinationUser: "Destination User",
  isQuarantined: "Is Quarantined",
  host: "Host",
  parentProcess: "Parent Process",
  process: "Process",
};

const FIELD_WIDTHS: Partial<Record<keyof SIEMAlert | keyof EDRAlert, number>> = {
  sourceHost: 6,
  destinationHost: 6,
  sourceIP: 6,
  destinationIP: 6,
  sourceUser: 6,
  destinationUser: 6,
  isQuarantined: 12,
  host: 6,
  parentProcess: 6,
  process: 6,
};

const DEFAULT_SIEM_FIELDS = [
  "sourceHost",
  "destinationHost",
  "sourceIP",
  "destinationIP",
  "sourceUser",
  "destinationUser",
];

const DEFAULT_EDR_FIELDS = [
  "isQuarantined",
  "host",
  "parentProcess",
  "process",
];

export type AlertDetailsTabProps = {
  alert: Alert,
  onFieldChange: <T extends SIEMAlert | EDRAlert>(field: keyof T, value: T[keyof T]) => void;
};

// TODO: Optimize, replace field check w/ O(n) includes
const AlertDetailsTab = ({ alert, onFieldChange }: AlertDetailsTabProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [fields, setFields] = useState(isSIEMAlert(alert) ? DEFAULT_SIEM_FIELDS : DEFAULT_EDR_FIELDS);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null);

  const handleMenuItemClick = (field: string) => {
    setFields((oldFields) => oldFields.includes(field)
      ? oldFields.filter((oldField) => oldField !== field)
      : oldFields.concat(field));
  }

  const handleBlur = <T extends SIEMAlert | EDRAlert>(field: keyof T, value: T[keyof T]) => {
    if (alert[field as keyof Alert] !== value) {
      onFieldChange(field, value);
    }
  };

  return (
    <Box>
      <Grid container columnSpacing={2} rowSpacing={4}>
        <Grid size={12} display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Category: {ALERT_CATEGORY_LABELS[alert.category]}</Typography>

          <Button onClick={handleMenuClick}>
            <SettingsIcon sx={{ marginRight: 2 }} />
            <Typography>Configure Fields</Typography>
          </Button>

          <Menu
            open={anchorEl !== null}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            elevation={0}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <MenuList dense>
              {isSIEMAlert(alert) ? DEFAULT_SIEM_FIELDS.map((field) => (
                <MenuItem key={field} onClick={() => handleMenuItemClick(field)} disableRipple>
                  <ListItemIcon>{fields.includes(field) ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</ListItemIcon>
                  <Typography>{FIELD_LABELS[field as keyof SIEMAlert]}</Typography>
                </MenuItem>
              )) : DEFAULT_EDR_FIELDS.map((field) => (
                <MenuItem key={field} onClick={() => handleMenuItemClick(field)} disableRipple>
                  <ListItemIcon>{fields.includes(field) ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</ListItemIcon>
                  <Typography>{FIELD_LABELS[field as keyof EDRAlert]}</Typography>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Grid>

        {
          isSIEMAlert(alert) ? fields.map((field) => {
            const siemField = field as keyof SIEMAlert;

            return (
              <Grid size={FIELD_WIDTHS[siemField]}>
                <TextField
                  label={FIELD_LABELS[siemField]}
                  defaultValue={alert[siemField]}
                  fullWidth
                  onBlur={(evt) => handleBlur<SIEMAlert>(siemField, evt.target.value)}
                />
              </Grid>
            );
          }) : isEDRAlert(alert) ? fields.map((field) => {
            const edrField = field as keyof EDRAlert;

            if (edrField === "isQuarantined") {
              return (
                <Grid size={FIELD_WIDTHS.isQuarantined}>
                  <FormLabel>
                    <Typography>Is Quarantined</Typography>
                  </FormLabel>

                  <Checkbox
                    value={Boolean(alert.isQuarantined)}
                    onBlur={(evt) => handleBlur<EDRAlert>("isQuarantined", evt.target.value)}
                  />
                </Grid>
              )
            }

            return (
              <Grid size={FIELD_WIDTHS[edrField]}>
                <TextField
                  label={FIELD_LABELS[edrField]}
                  defaultValue={alert[edrField]}
                  fullWidth
                  onBlur={(evt) => handleBlur<EDRAlert>(edrField, evt.target.value)}
                />
              </Grid>
            );
          }) : <></>}

        <Grid size={12}>
          <TextField
            label="Work Notes"
            defaultValue={alert.notes || ""}
            fullWidth
            multiline
            minRows={3}
            onBlur={(evt) => handleBlur("notes", evt.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AlertDetailsTab;
