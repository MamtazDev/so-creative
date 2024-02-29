import InsightsCard from "../../components/EditorPanel/EditorDashboard/InsightsCard";
import MyWorkTable from "../../components/EditorPanel/EditorDashboard/MyWorkTable";

const EditorDashboard = () => {
  return (
    <>
      <section className="editordashboard">
        <div className="grid grid-cols-12 gap-10">
          {/* Insights start */}
          <div className="col-span-8">
            <div className="insights_wrapper pb-10">
              <div className="seciton_heading pb-6">
                <h3 className="text-2xl font-bold text-slate-900">Insights</h3>
              </div>
              <InsightsCard />
            </div>

            <div className="seciton_heading pb-6">
              <h3 className="text-2xl font-bold text-slate-900">My Work</h3>
            </div>

            <MyWorkTable />
          </div>
          {/* Insights -/end */}

          {/* Recent Activities start */}
          <div className="col-span-4">4</div>
          {/* Recent Activities -/end */}
        </div>
      </section>
    </>
  );
};

export default EditorDashboard;
