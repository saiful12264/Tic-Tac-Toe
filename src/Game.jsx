import Board from "./Board";
import History from "./History";

export default function Game(){
    return (
       <div className="flex justify-center mt-20 gap-10 ">
          <div className="flex justify-center mt-20">
             <Board/>
          </div>
          <div className="flex justify-center mt-20">
            <History/>
          </div>
       </div>
    );
}