from flask import Flask
import pickle
import json

app = Flask(__name__)



loaded_model1 = pickle.load(open('M01AB_final1.sav', 'rb'))
loaded_model2 = pickle.load(open('M01AE_final1.sav', 'rb'))
loaded_model3 = pickle.load(open('N02BA_final1.sav', 'rb'))
loaded_model4 = pickle.load(open('N02BE_final1.sav', 'rb'))
loaded_model5 = pickle.load(open('N05B_final1.sav', 'rb'))
loaded_model6 = pickle.load(open('N05C_final1.sav', 'rb'))
loaded_model7 = pickle.load(open('R03_final1.sav', 'rb'))
loaded_model8 = pickle.load(open('R06_final1.sav', 'rb'))


def getpred(type,days):


    if(type=='M01AB'):

        val= loaded_model1.predict([[int(days)]])
        return json.dumps(val)
    elif(type=='M01AE'):

        return loaded_model2.predict([[int(days)]])
    elif(type=='N02BA'):

        return loaded_model3.predict([[int(days)]])
    elif(type=='N02BE'):

        return loaded_model4.predict([[int(days)]])
    elif(type=='N05B'):

        return loaded_model5.predict([[int(days)]])
    elif(type=='N05C'):

        return (loaded_model6.predict([[int(days)]]))
    elif(type=='R03'):

        return (loaded_model7.predict([[int(days)]]))
    else:

        return (loaded_model8.predict([[int(days)]]))



@ app.route('/<int:val>/<type>')
def first(val,type):


    if type not in ['M01AB','M01AE','N02BA','N02BE','N05B','N05C','R03','R06']:
        type='M01AB'

    return  "{:.2f}".format(getpred(type,val)[0])

# driver function
if __name__ == '__main__':

    app.run(debug=True)