const NormalFilters = ({ handleUserChange, setFilter }) => {
  const handleSelectChange = (value, setFilter) => {
    setFilter(value);
  };
  return (
    <div className="flex gap-4 items-center max-[847px]:w-[700px] text-[13px]">
      <div>
        <select
          className="w-28 outline-none"
          onChange={(e) => handleSelectChange(e.target.value, setFilter)}
        >
          <option value="all-profiles" onClick={() => setFilter("all-users")}>
            All profiles
          </option>
          <option
            value="active-profiles"
            onClick={() => setFilter("all-users")}
          >
            Active profiles
          </option>
          <option
            value="inactive-profiles"
            onClick={() => setFilter("all-users")}
          >
            Inactive profiles
          </option>
        </select>
      </div>

      <div>
        <select
          className="w-24 outline-none"
          onChange={(e) => {
            handleUserChange(e.target.value);
            handleSelectChange(e.target.value, setFilter);
          }}
        >
          <option value="all-users" onClick={() => setFilter("all-users")}>
            All users
          </option>
          <option value="add-new-user">Add new users</option>
          <option value="administrators">Administrators</option>
          <option value="editors">Editors</option>
          <option value="contributors">Contibutors</option>
        </select>
      </div>

      <div>
        <button onClick={() => setFilter("deleted-posts")}>
          Deleted posts
        </button>
      </div>

      <div>
        <button>View Posts</button>
      </div>

      <div>
        <button>Back up</button>
      </div>

      <div>
        <button>Plugins</button>
      </div>

      <div>
        <button>Revenue</button>
      </div>

      <div>
        <button>Site kits</button>
      </div>
    </div>
  );
};

export default NormalFilters;
