import { SdkProvider } from "components/providers/uphold-sdk";
import CurrencyConverter from "pages/currency-converter";

function Root() {
  return (
    <SdkProvider>
      <CurrencyConverter />
    </SdkProvider>
  );
}

export default Root;
