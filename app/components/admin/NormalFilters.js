const NormalFilters = ({ handleUserChange, setFilter }) => {
  return (
    <div className="flex gap-4 items-center max-[847px]:w-[700px] text-[13px]">
      <div>
        <select
          className="w-28 outline-none"
          onChange={(e) => setFilter("all-users")}
        >
          <option value="all-profiles">All profiles</option>
          <option value="active-profiles">Active profiles</option>
          <option value="inactive-profiles">Inactive profiles</option>
        </select>
      </div>

      <div>
        <select
          className="w-24 outline-none"
          onChange={(e) => {
            handleUserChange(e.target.value);
            setFilter("all-users");
          }}
        >
          <option value="all-users">All users</option>
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
