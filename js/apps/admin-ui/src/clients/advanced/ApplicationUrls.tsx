import { useTranslation } from "react-i18next";
import { TextControl } from "ui-shared";

type ApplicationUrlsProps = {
  isDisabled?: boolean;
};

export const ApplicationUrls = (props: ApplicationUrlsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <TextControl
        name="attributes.logoUri"
        label={t("clients:logoUrl")}
        labelIcon={t("logoUrlHelp")}
        type="url"
        {...props}
      />
      <TextControl
        name="attributes.policyUri"
        label={t("clients:policyUrl")}
        labelIcon={t("policyUrlHelp")}
        type="url"
        {...props}
      />
      <TextControl
        name="attributes.tosUri"
        label={t("clients:termsOfServiceUrl")}
        labelIcon={t("termsOfServiceUrlHelp")}
        type="url"
        {...props}
      />
    </>
  );
};
