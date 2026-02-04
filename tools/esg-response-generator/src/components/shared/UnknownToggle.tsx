export type UnknownFields = Set<string>;

export function UnknownToggle({ field, unknownFields, setUnknownFields }: {
  field: string; unknownFields: UnknownFields; setUnknownFields: React.Dispatch<React.SetStateAction<UnknownFields>>;
}) {
  const isUnknown = unknownFields.has(field);
  return (
    <label className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer mt-1">
      <input
        type="checkbox"
        checked={isUnknown}
        onChange={e => {
          setUnknownFields(prev => {
            const next = new Set(prev);
            if (e.target.checked) next.add(field); else next.delete(field);
            return next;
          });
        }}
        className="rounded border-gray-300 w-3.5 h-3.5"
      />
      I don&apos;t have this data
    </label>
  );
}
