import Layout from "../components/Layout";
import Settings from "../components/Settings";

const SettingsPage = ({ darkMode, setDarkMode }) => {
  return (
    <Layout isSubPage title="Settings">
      <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
    </Layout>
  );
};

export default SettingsPage;
