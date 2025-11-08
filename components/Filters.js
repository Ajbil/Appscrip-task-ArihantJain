// components/Filters.js
export default function Filters({ count = 0, onHide }) {
  return (
    <div className="filters-pane">
      <div className="filters-header">
        <span className="items-count">{count} ITEMS</span>
        <button className="hide-filter" onClick={onHide} aria-label="Hide filters">
          ‹ HIDE FILTER
        </button>
      </div>

      <div className="divider" />

      {/* Top single checkbox row */}
      <label className="checkbox-row">
        <input type="checkbox" /> <span>CUSTOMIZABLE</span>
      </label>

      <div className="divider" />

      {/* Accordion groups using <details> for accessibility */}
      <details className="accordion" open>
        <summary>
          <span className="acc-title">IDEAL FOR</span>
          <span className="chev">⌄</span>
        </summary>
        <div className="acc-body">
          <div className="acc-subline">
            <span>All</span>
            <button className="link-ghost" type="button">Unselect all</button>
          </div>
          <label className="checkbox-row">
            <input type="checkbox" /> <span>Men</span>
          </label>
          <label className="checkbox-row">
            <input type="checkbox" /> <span>Women</span>
          </label>
          <label className="checkbox-row">
            <input type="checkbox" /> <span>Baby & Kids</span>
          </label>
        </div>
      </details>

      <div className="divider" />

      {[
        'OCCASION',
        'WORK',
        'FABRIC',
        'SEGMENT',
        'SUITABLE FOR',
        'RAW MATERIALS',
        'PATTERN',
      ].map((label) => (
        <div key={label}>
          <details className="accordion">
            <summary>
              <span className="acc-title">{label}</span>
              <span className="chev">⌄</span>
            </summary>
            <div className="acc-body">
              <div className="acc-subline"><span>All</span></div>
              {/* keep empty for now – can plug real options later */}
            </div>
          </details>
          <div className="divider" />
        </div>
      ))}
    </div>
  );
}
