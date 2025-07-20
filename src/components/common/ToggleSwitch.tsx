interface ToggleSwitchProps {
    label1: string;
    label2: string;
    isChecked: boolean;
    onToggle: (checked: boolean) => void;
}

const ToggleSwitch = ({ label1, label2, isChecked, onToggle }: ToggleSwitchProps) => {
    return (
        <div className="flex items-center space-x-2">
            <span className="text-gray-700 dark:text-gray-300 font-medium">{label1}</span>
            <label htmlFor="toggle" className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={(e) => onToggle(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{label2}</span>
        </div>
    );
}

export default ToggleSwitch;