export function StyledSelect({ label, value, onChange, options, placeholder, required, hint }: {
  label: string; value: string; onChange: (v: string) => void;
  options: string[]; placeholder?: string; required?: boolean; hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
      >
        <option value="">{placeholder || 'Select...'}</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {hint && <p className="mt-1.5 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
