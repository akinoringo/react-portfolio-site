import { useEffect, useReducer } from "react"
import axios from "axios"
import { skillReducer, initialState, actionTypes } from "../reducers/skillReducer"
import { requestStates } from "../constants"
import { Circle } from "react-circle"

export const Skills = () => {
  // const [data, SetData] = useState(null)
  // console.log(data)

  // stateの初期化
  // const [languageList, SetLanguageList] = useState([])
  const [state, dispatch] = useReducer(skillReducer, initialState)

  /**
   * Github APIで取得した言語データをステートに保存
   */
  // useEffect(() => {
  //   axios.get('https://api.github.com/users/akinoringo/repos')
  //     .then((response) => {
  //       const languageList = response.data.map(res => res.language)
  //       const countedLanguageList = generateLanguageCountObj(languageList)
  //       SetLanguageList(countedLanguageList)
  //     })
  // }, [])

  useEffect(() => {
    dispatch({ type: actionTypes.fetch })
    axios.get('https://api.github.com/users/akinoringo/repos')
      .then(response => {
        const languageList = response.data.map(res => res.language)
        const countedLanguageList = generateLanguageCountObj(languageList)
        dispatch({ type: actionTypes.success, payload: { languageList: countedLanguageList } })
      }).catch(() => {
        dispatch({ type: actionTypes.error })
      })
  }, [])

  /**
   * プログラミング言語の配列からnullのものを取り除き、重複を除き、言語および配列中にある言語のカウント数を連想配列の形で返す
   * 例：[{language: php, count: 2}, {language: ruby, count: 1}]
   */
  const generateLanguageCountObj = (allLanguageList) => {
    const notNullLanguageList = (allLanguageList).filter(language => language != null) // nullのものを取り除く
    const uniqueLanguageList = [...new Set(notNullLanguageList)] // 重複を取り除く

    return uniqueLanguageList.map(item => {
      return {
        language: item,
        count: allLanguageList.filter(language => language === item).length
      }
    })
  }

  const converseCountToPercentage = (count) => {
    if (count > 10) { return 100 }
    return count * 10
  }

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2 className="skills">Skills</h2>
        </div>
        <div className="skills-container">
          {
            state.requestState === requestStates.loading && (
              <p className="description">取得中...</p>
            )
          }
          {
            state.requestState === requestStates.success && (
              state.languageList.map((item, index) => (
                <div className="skill-item" key="index">
                  <p className="description"><strong>{item.language}</strong></p>
                  <Circle
                    animate
                    progress={converseCountToPercentage(item.count)}
                  >
                  </Circle>
                </div>
              ))
            )
          }
          {
            state.requestState === requestStates.error && (
              <p className="description">エラーが発生しました</p>
            )
          }
        </div>
      </div>
    </div>
  )
}
