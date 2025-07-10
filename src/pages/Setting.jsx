import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-teal-500 px-4 py-2"
      >
        <div className="flex items-center gap-2">
          <span className="text-black ">{title}</span>
          {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      {open && (
        <div className="bg-gray-100 px-8 py-4 space-y-4 ml-4">{children}</div>
      )}
    </div>
  );
};

export default function Settings() {
  const [settings, setSettings] = useState({
    dataBackup: true,
    goDash: true,
    superController: true,
    enableSMTP: true,
    editAuthorization: true,
    enableNotification: true,
  });

  return (
    <div className="h-screen overflow-hidden mx-auto mt-1 text-sm font-medium text-gray-800 font-sanchez">
      <h1 className="text-3xl mb-1">Setting</h1>

      <Section title="General">
        <div className="flex items-center justify-between">
          <span>Language</span>
          <div className="space-x-1">
            <button className="bg-black text-white text-xs px-2 py-1 rounded">
              BM
            </button>
            <button className="bg-white text-black border text-xs px-2 py-1 rounded">
              BI
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Data Backup</span>
          <input
            type="checkbox"
            checked={settings.dataBackup}
            onChange={() =>
              setSettings({ ...settings, dataBackup: !settings.dataBackup })
            }
          />
        </div>
      </Section>

      <Section title="Connect To">
        <div className="flex items-center justify-between">
          <span>GoDash</span>
          <input
            type="checkbox"
            checked={settings.goDash}
            onChange={() =>
              setSettings({ ...settings, goDash: !settings.goDash })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <span>SuperController</span>
          <input
            type="checkbox"
            checked={settings.superController}
            onChange={() =>
              setSettings({
                ...settings,
                superController: !settings.superController,
              })
            }
          />
        </div>
      </Section>

      <Section title="Email">
        <div className="flex items-center justify-between">
          <span>Enable SMTP</span>
          <input
            type="checkbox"
            checked={settings.enableSMTP}
            onChange={() =>
              setSettings({ ...settings, enableSMTP: !settings.enableSMTP })
            }
          />
        </div>
      </Section>

      <Section title="Authorization">
        <div className="flex items-center justify-between">
          <span>Edit authorization</span>
          <input
            type="checkbox"
            checked={settings.editAuthorization}
            onChange={() =>
              setSettings({
                ...settings,
                editAuthorization: !settings.editAuthorization,
              })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Authority Level</span>
          <select className="border rounded px-2 py-1 bg-gray-200">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </Section>

      <Section title="Notification">
        <div className="flex items-center justify-between">
          <span>Enable Notification</span>
          <input
            type="checkbox"
            checked={settings.enableNotification}
            onChange={() =>
              setSettings({
                ...settings,
                enableNotification: !settings.enableNotification,
              })
            }
          />
        </div>
      </Section>
    </div>
  );
}
