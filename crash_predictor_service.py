from flask import Flask, request, jsonify
from valid_mutation_marker import predict

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict_endpoint():
    """
    Expects JSON payload with either:
    - parent_code, mutated_code, parent_id, mutated_id
    Optional:
    - flags
    """
    try:
        data = request.get_json()
        parent_code = data.get("parent_code", "")
        mutated_code = data.get("mutated_code", "")
        parent_id = data.get("parent_id", "parent")
        mutated_id = data.get("mutated_id", "mutant")
        flags = data.get("flags", "")

        retained = predict(
            parent_code=parent_code,
            mutated_code=mutated_code,
            parent_id=parent_id,
            mutated_id=mutated_id,
            flags=flags
        )
        return jsonify({"retained": retained})

    except Exception as e:
        #traceback.print_exc()
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=False)