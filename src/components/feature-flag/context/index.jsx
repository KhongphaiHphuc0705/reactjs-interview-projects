import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data.js";

export const FeatureFlagContext = createContext();

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    setLoading(true);
    try {
      const response = await featureFlagsDataServiceCall();
      console.log(response);
      setEnabledFlags(response);
    } catch (error) {
      console.log("Error fetching feature flags:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>{children}</FeatureFlagContext.Provider>;
}
